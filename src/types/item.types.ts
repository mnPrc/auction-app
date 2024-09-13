export interface CreateNewItem{
    name: string;
    description: string;
    current_price: number;
    buy_now_price: number;
    end_time: number;
    images: File[];
}

export interface Image {
    id: number;
    item_id: number;
    image_path: string;
    created_at: string;
    updated_at: string;
}

export interface Item {
    id: number;
    user_id: number;
    name: string;
    description: string;
    current_price: number;
    buy_now_price: number;
    end_time: string;
    images: Image[];
}

export interface PaginatedItems {
    current_page: number;
    data: Item[];
    first_page_url: string;
    last_page: number;
    total: number;
}

export interface ItemState{
    items: PaginatedItems;
    item: Item;
    createItemErrors: string[];
    page: number;
    search: string;
}