import { getProductOptions } from './ProductOptions';

describe('Product Oprions', () => {
    it('should return empty array if no options are provided', () => {
        const { colours, paperType } = getProductOptions([]);
        expect(colours).toHaveLength(0);
        expect(paperType).toHaveLength(0)
    })

    it('should return only colours array if colours attribute are provided', () => {
        const data = [

            {
                "id": "1",
                "product-group-label": "Hardcover Notebook",
                "product-group-id": "hardcover-notebook",
                "item-description": "Sunset notebook with dotted paper",
                "attributes": [
                    {
                        "id": "cc1",
                        "type": "cover-colour",
                        "value": "red",
                        "label": "Sunset"
                    },
                    {
                        "id": "sc1",
                        "type": "slip-case-included",
                        "value": false,
                        "label": "Slipcase"
                    }
                ],
                "price": 17
            },
            {
                "id": "2",
                "product-group-label": "Hardcover Notebook",
                "product-group-id": "hardcover-notebook",
                "item-description": "Ocean notebook with dotted paper",
                "attributes": [
                    {
                        "id": "cc2",
                        "type": "cover-colour",
                        "value": "blue",
                        "label": "Ocean"
                    },
                    {
                        "id": "sc1",
                        "type": "slip-case-included",
                        "value": false,
                        "label": "Slipcase"
                    }
                ],
                "price": 18
            }
        ];
        const { colours, paperType } = getProductOptions(data);
        expect(colours).toHaveLength(2);
        expect(paperType).toHaveLength(0)
    })

    it('should return only paperType array if paper-type attribute are provided', () => {
        const data = [

            {
                "id": "1",
                "product-group-label": "Hardcover Notebook",
                "product-group-id": "hardcover-notebook",
                "item-description": "Sunset notebook with dotted paper",
                "attributes": [
                    {
                        "id": "pt1",
                        "type": "paper-type",
                        "value": "dotted",
                        "label": "Dotted paper"
                    },
                    {
                        "id": "sc1",
                        "type": "slip-case-included",
                        "value": false,
                        "label": "Slipcase"
                    }
                ],
                "price": 17
            },
            {
                "id": "2",
                "product-group-label": "Hardcover Notebook",
                "product-group-id": "hardcover-notebook",
                "item-description": "Ocean notebook with dotted paper",
                "attributes": [
                    {
                        "id": "pt1",
                        "type": "paper-type",
                        "value": "dotted",
                        "label": "Dotted paper"
                    },
                    {
                        "id": "sc1",
                        "type": "slip-case-included",
                        "value": false,
                        "label": "Slipcase"
                    }
                ],
                "price": 18
            }
        ];
        const { colours, paperType } = getProductOptions(data);
        expect(colours).toHaveLength(0);
        expect(paperType).toHaveLength(1)
    })


});