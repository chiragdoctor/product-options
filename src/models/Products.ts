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

export interface IFiltersProps {
    handleInputChange: Function;
    handleSlipcaseChange: Function;
    colourValue: string;
    paperTypeValue: string;
    slipcaseValue: boolean;
}


export interface ISlipcaseProps {
    handleSlipcaseChange: Function;
    value: boolean;
}

export interface IInputRadioProps {
    label: string;
    data: IAttribute[];
    handleInputChange: Function;
    value: string;
}

