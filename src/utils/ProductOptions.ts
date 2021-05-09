import { COLOUR_TYPE, PAPER_TYPE } from "../constants";
import { IAttribute, IProduct } from "../models/Products"

export const getProductOptions = (products: IProduct[]) => {
    let colours: any = [];  
    let paperType: any = [];
    products.forEach(product => {
        product.attributes.forEach(attribute => {
            if(attribute.type === COLOUR_TYPE && !colours.some((colour: IAttribute) => colour.id === attribute.id)) {
                colours.push(attribute)
            }

            if(attribute.type === PAPER_TYPE && !paperType.some((type: IAttribute) => type.id === attribute.id)) {
                paperType.push(attribute)
            }
        })
    })
    return { colours, paperType }
}