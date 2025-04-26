import axios from "axios";



const BASE_URL = `55/api`;

// Type definition for user data
interface UserData {
  [key: string]: any; // Replace with specific fields if available (e.g., username, password, etc.)
}

// Register function
export const register = async (data: UserData): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response;
  } catch (error) {
    console.error("DEBUG: Unable to register with error", error);
    throw error;
  }
};

// Login function
export const login = async (data: UserData): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response;
  } catch (error) {
    console.error("DEBUG: Unable to login with error", error);
    throw error;
  }
};