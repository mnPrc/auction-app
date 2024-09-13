import { RootState } from "..";
import { Item } from "../../types/item.types";

export const selectItems= (state: RootState) => state.items.items.data;
export const selectPaginatedItems= (state: RootState) => state.items.items;
export const selectItem = (state: RootState): Item => state.items.item;
export const selectCreateItemErrors = (state: RootState): string[] => state.items.createItemErrors;
export const selectSearchTerm = (state: RootState): string => state.items.search;