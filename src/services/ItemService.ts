import { CreateNewItem } from "../types/item.types";
import HttpService from "./HttpService";

class ItemService extends HttpService{
    getAllItems = async(search?: string , page: number = 1) => {
        let endpoint = `/items/?page=${page}`;

        if(search){
            endpoint += `&search=${encodeURIComponent(search)}`;
        }

        const { data } = await this.client.get(endpoint);
        return data;
    }

    getItem = async(itemId: number) => {
        const { data } = await this.client.get(`/items/${itemId}`);
        return data;
    }

    createItem = async(newItem: CreateNewItem) => {
        const { data } = await this.client.post('/add-item', newItem);
        return data;
    }

    deleteItem = async(itemId: number) => {
        const { data } = await this.client.delete(`/items/${itemId}`);
        return data;
    }
}

const itemService = new ItemService();
export default itemService;