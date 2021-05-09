import React from 'react';
import { mount } from 'enzyme';
import Filters from './Filters';
import InputRadio from './InputRadio';
import Slipcase from './Slipcase';


describe('Filters Component', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(<Filters />)
    });

    it('should render the component', () => {
        const pc = wrapper.find(Filters);
        expect(pc.exists()).toBe(true);
    });

    it('should render InputRadio for colours', () => {
        const radio = wrapper.find(InputRadio).first();
        expect(radio.exists()).toBe(true);
        expect(radio.props().defaultValue).toBe('red');
        expect(radio.props().label).toBe('Color');
    });

    it('should render InputRadio for paper type', () => {
        const radio = wrapper.find(InputRadio).at(1);
        expect(radio.exists()).toBe(true);
        expect(radio.props().defaultValue).toBe('dotted');
        expect(radio.props().label).toBe('Paper type');
    });

    it('should render Switch for slipcase', () => {
        const slipcase = wrapper.find(Slipcase);
        expect(slipcase.exists()).toBe(true);
    });
})
