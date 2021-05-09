import React from 'react';
import { mount } from 'enzyme';
import Slipcase from './Slipcase';
import { Switch } from '@material-ui/core';


describe('Filters Component', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(<Slipcase />)
    });

    it('should render the component', () => {
        const slipcase = wrapper.find(Slipcase);
        expect(slipcase.exists()).toBe(true);
    });

    it('should render Switch component', () => {
        const sc = wrapper.find(Switch);
        expect(sc.exists()).toBe(true);
    });
})
