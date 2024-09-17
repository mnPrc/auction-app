import { call, put, takeLatest } from 'redux-saga/effects';
import { 
    getAllItems, 
    getItem, 
    createItem, 
    deleteItem, 
    setItems, 
    setItem, 
    setCreateItemErrors, 
    setBidOnItemErrors,
    bidOnItem,
    buyNowItem,
} from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreateNewItem, Item, PaginatedItems } from "../../types/item.types";
import { ApiErrorResponse } from "../../types/errors.types";
import itemService from '../../services/ItemService';

function* handleGetAllItems(action: PayloadAction<{ search?: string , page: number }>): Generator{
    try{
        const items = (yield call(
            itemService.getAllItems,
            action.payload.search,
            action.payload.page,
        )) as PaginatedItems;
        yield put(setItems(items));
    }catch(error){
        console.error("Failed to get items", error);
    }
}

function* handleGetItem(action: PayloadAction<{ id: number }>): Generator{
    try{
        const item = (yield call(itemService.getItem, action.payload.id)) as Item;
        console.log('Fetched item:', item);
        yield put(setItem(item))
    }catch(error){
        console.error("Failed to get item", error);
    }
}

function* handleCreateItem(action: PayloadAction<{newItem: CreateNewItem, meta: {onSuccess: () => void}}>): Generator{
    try{   
        const item = (yield call(itemService.createItem, action.payload.newItem)) as Item;
        yield put(setItem(item));
        action.payload.meta.onSuccess();
    }catch(errors){
        const apiError = errors as ApiErrorResponse;
        const message = apiError.response.data.message;
        yield put(setCreateItemErrors(Array.isArray(message) ? message :  [message || 'Login failed']));
    }
}

function* handleDeleteItem(action: PayloadAction<{id: number, meta: {onSuccess: () => void}}>): Generator{
    try{
        yield call(itemService.deleteItem, action.payload.id);
        action.payload.meta.onSuccess();
    }catch(error){  
        console.error('Failed to delete item', error);
    }
}

function* handleBidOnItem(action: PayloadAction<{id: number, bidAmount: number}>): Generator {
    try{
        yield call(itemService.bidOnItem, action.payload.id, action.payload.bidAmount);
        const itemWithBid = (yield call(itemService.getItem, action.payload.id)) as Item;
        yield put(setItem(itemWithBid));
    }catch(error){
        const apiError = error as ApiErrorResponse;
        yield put(setBidOnItemErrors(apiError.response.data.error));
    }
}

function* handleBuyNowItem(action: PayloadAction<{id: number, meta: {onSuccess: () => void}}>): Generator{
    try{
        const itemBuyNow = (yield call(itemService.buyNowItem, action.payload.id)) as Item;
        yield put(setItem(itemBuyNow));
        action.payload.meta.onSuccess();
    }catch(error){
        console.error(error);
    }
}
export function* watchItemSagas(){
    yield takeLatest(getAllItems.type, handleGetAllItems);
    yield takeLatest(getItem.type, handleGetItem);
    yield takeLatest(createItem.type, handleCreateItem);
    yield takeLatest(deleteItem.type, handleDeleteItem);
    yield takeLatest(bidOnItem.type, handleBidOnItem);
    yield takeLatest(buyNowItem.type, handleBuyNowItem);
}