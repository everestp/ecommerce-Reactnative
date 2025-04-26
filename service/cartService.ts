import axios from "axios";
import { AP_URL } from "./baseUrl";


const API_URL = `${AP_URL}/api/cart`;

// Add to Cart Service
export const addTocartService = async (foodId: string, token: string): Promise<any> => {
  try {
    const response = await axios.post(
      API_URL,
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response;
  } catch (error) {
    console.error("DEBUG: Error while adding items", error);
    throw error;
  }
};

// Remove Quantity from Cart
export const removeQtyFromCart = async (foodId: string, token: string): Promise<void> => {
  try {
    await axios.post(
      `${API_URL}/remove`,
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    console.error("DEBUG: Error while removing items", error);
    throw error;
  }
};

// Get Cart Data
export const getCartData = async (token: string): Promise<any[]> => {
  try {
    const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
    return response.data.items;
  } catch (error) {
    console.error("DEBUG: Error while fetching cart data", error);
    throw error;
  }
};

// Clear Cart
export const clearCart = async (token: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Note: setQuantities is not defined in the provided code. You might want to handle it in context or elsewhere.
    console.warn("setQuantities function is missing, ensure to implement it.");
    return response;
  } catch (error) {
    console.error("Error while clearing cart");
    throw error;
  }
};