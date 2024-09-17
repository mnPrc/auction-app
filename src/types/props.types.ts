import { Image, Item } from "./item.types";

export interface DisplayImagesProps{
    images: Image[],
}

export interface ItemRowProps {
    item: Item;
}

export interface RouteProps {
    element: JSX.Element;
}

export interface CreateItemErrorsProps {
    errors: string[];
}

export interface RegisterErrorsProps {
    errors: string[];
}

export interface LoginErrorsProps {
    error: string;
}

export interface BidOnItemProps{
    error: string;
}

export interface DisplayBidFormProps {
    item: Item;
}