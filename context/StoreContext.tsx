import { toast } from "react-toastify";
import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchItemList } from "@/service/ItemService";
import { addTocartService, getCartData, removeQtyFromCart } from "@/service/cartService";


// Defining types
interface StoreContextType {
  itemList: any[];
  quantities: Record<string, number>;
  token: string;
  orderId: string;
  increaseQty: (foodId: string) => Promise<void>;
  decreaseQty: (foodId: string) => Promise<void>;
  removeFromCart: (foodId: string) => void;
  addtoCart: (id: string) => void;
  setToken: (token: string) => void;
  setQuantities: (quantities: Record<string, number>) => void;
  loadCartData: (token: string) => Promise<void>;
  setOrderId: (orderId: string) => void;
}

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const [itemList, setItemList] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [token, setToken] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("65345356534563453456");



  const increaseQty = async (foodId: string) => {
    setQuantities((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
    await addTocartService(foodId, token);
  };

  const addtoCart = (id: string) => {
    increaseQty(id);
    toast.success("Added to Cart");
  
  };

  const decreaseQty = async (foodId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
    }));
    await removeQtyFromCart(foodId, token);
  };

  const removeFromCart = (foodId: string) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[foodId];
      toast.error("Items Removed");
      return updatedQuantities;
    });
  };

  const loadCartData = async (token: string) => {
    const items = await getCartData(token);
    const quantitiesMap = items.reduce((acc: Record<string, number>, item: any) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setQuantities(quantitiesMap);
  };

  const contextValue: StoreContextType = {
    itemList,
    increaseQty,
    decreaseQty,
    quantities,
    removeFromCart,
    addtoCart,
    token,
    setToken,
    setQuantities,
    loadCartData,
    orderId,
    setOrderId,
  };

  useEffect(() => {
    async function loadData() {
      const data = await fetchItemList();
      setItemList(data);
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
      console.log(data);
    }
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Placeholder functions (implementations should be added)
