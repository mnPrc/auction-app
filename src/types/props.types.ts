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

