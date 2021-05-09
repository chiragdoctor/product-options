export interface IAttribute {
    id: string;
    type: string;
    value: string | boolean;
    label: string;
}

export interface IProduct {
    id: string;
    "product-group-label": string;
    "product-group-id": string;
    "item-description": string;
    attributes: IAttribute[],
    price: number;
}

export interface IColourFilterProps {
    filter: IAttribute[]
}