import axios from "axios";
import { toast } from "react-toastify";


const API_URL = `https://foodapp-springboot-2.onrender.com/api/orders`;

// Type Definitions
interface OrderData {
  [key: string]: any; // Represents any shape of data object
}

interface PaymentData {
  [key: string]: any; // Represents any shape of data object
}

// Function for Creating Order
export const createOrder = async (orderData: OrderData, token: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/create`, orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Function for Deleting Order
export const deleteOrder = async (orderId: string, token: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    toast.error("Error while deleting items");
    throw error;
  }
};

// Function for Payment
export const paymentDone = async (
  paymentData: PaymentData,
  token: string,
  orderId: string
): Promise<any> => {
  try {
    const response = await axios.patch(`${API_URL}/${orderId}/paymentStatus`, paymentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    toast.error("Error while processing payment");
    console.error("Error in payment:", error);
    throw error;
  }
};