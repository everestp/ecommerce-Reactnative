import axios from "axios";



const API_URL = `https://foodapp-springboot-2.onrender.com/api/foods`;

export const addFood = async (foodData: Record<string, any>, image: File): Promise<void> => {
    const formData = new FormData();
    formData.append('food', JSON.stringify(foodData));
    formData.append('file', image);

    try {
        await axios.post(API_URL, formData, { headers: { "Content-Type": "multipart/form-data" } });
    } catch (error) {
        console.error("DEBUG: Error Adding Food", error);
        throw error;
    }
};

export const getProductList = async (): Promise<any[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("DEBUG: Error Fetching Food List", error);
        throw error;
    }
};

export const deleteFood = async (foodId: string): Promise<boolean> => {
    try {
        const response = await axios.delete(`${API_URL}/${foodId}`);
        return response.status === 204;
    } catch (error) {
        console.error("DEBUG: Error Deleting Food", error);
        throw error;
    }
};