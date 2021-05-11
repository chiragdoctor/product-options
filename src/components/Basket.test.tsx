import React from 'react';
import { mount } from 'enzyme';
import Basket from './Basket';
import productOptions from '../data/productOptionsData.json';
import { Button, ListItem, ListItemSecondaryAction } from '@material-ui/core';

describe('Basket Component', () => {
    let wrapper: any;
    const props = {
        total: 0,
        handleAddToBasket: jest.fn(),
        basket: [productOptions.products[0], productOptions.products[1]],
        handleDeleteItem: jest.fn(),
    }
    beforeEach(() => {
        wrapper = mount(<Basket {...props} />)
    });

    it('should render the component', () => {
        const pc = wrapper.find(Basket);
        expect(pc.exists()).toBe(true);
    });

    it('should render two items in basket', () => {
        const listItem = wrapper.find(ListItem);
        expect(listItem.exists()).toBe(true);
        expect(listItem).toHaveLength(2);
    });

    it('should call handleAddToBasket on click of button', () => {
        const addToBasket = wrapper.find(Button);
        addToBasket.props().onClick();
        expect(props.handleAddToBasket).toHaveBeenCalled();
    })

    it('should call handleDeleteItem on click of DeleteIcon', () => {
        const item = wrapper.find(ListItemSecondaryAction).first();
        item.props().onClick();
        expect(props.handleDeleteItem).toHaveBeenCalledWith('Sunset notebook with dotted paper');
    })
});
