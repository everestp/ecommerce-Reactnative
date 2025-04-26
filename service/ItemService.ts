import axios from "axios";
import { AP_URL } from "./baseUrl";


const API_URL = `${AP_URL}/api/foods`;

// Type definition for the fetched item details
interface FoodItem {
  [key: string]: any; // Replace with specific keys and types if available
}

// Fetch the list of items
export const fetchItemList = async (): Promise<FoodItem[]> => {
  try {
    const response = await axios.get<FoodItem[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("DEBUG: Error fetching item list:", error);
    throw error;
  }
};

// Fetch food details by ID
export const fetchFoodDetail = async (id: string): Promise<FoodItem> => {
  try {
    const response = await axios.get<FoodItem>(`${API_URL}/${id}`);
    console.log(id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("DEBUG: Error fetching food detail:", error);
    throw error;
  }
};