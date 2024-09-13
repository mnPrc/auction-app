import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateNewItem, Item, ItemState, PaginatedItems } from "../../types/item.types";

const itemsSlice = createSlice({
    name: 'items',
    initialState:{
        items: {
            current_page: 1,
            data: [],
            first_page_url: "",
            last_page: 1,
            total: 1,
        },
        item: {} as Item,
        createItemErrors: [] as string[],
        page: 1,
        search: "",
    } as ItemState,

    reducers:{
        getAllItems(payload, action: PayloadAction<{ search?: string, page: number}>){
        },
        getItem(payload, action: PayloadAction<{ id: number}>){
        },
        createItem(payload, action: PayloadAction<{ newItem: CreateNewItem, meta: {onSuccess:() => void} }>){
        },
        deleteItem(payload, action: PayloadAction<{ id: number, meta: {onSuccess: () => void}}>){
        },
        setItems(state, action: PayloadAction<PaginatedItems>){
            state.items = action.payload;
        },
        setItem(state, action: PayloadAction<Item>){
            state.item = action.payload;
        },
        setSearchTerm(state, action: PayloadAction<string>){
            state.search = action.payload;
        },
        setCreateItem(state, action: PayloadAction<Item>){
            state.item = action.payload
        },
        setCreateItemErrors(state, action: PayloadAction<string[]>){
            state.createItemErrors = action.payload;
        }
    }
})

export const { 
    getAllItems, 
    getItem, 
    createItem, 
    deleteItem, 
    setItems, 
    setItem, 
    setSearchTerm, 
    setCreateItem, 
    setCreateItemErrors, 
} = itemsSlice.actions;

export default itemsSlice.reducer;