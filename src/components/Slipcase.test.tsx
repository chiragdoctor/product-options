import React from 'react';
import { mount } from 'enzyme';
import Slipcase from './Slipcase';
import { Switch } from '@material-ui/core';


describe('Slipcase Component', () => {
    let wrapper: any;
    const props = {
        handleSlipcaseChange: jest.fn(),
        value: false
    }
    beforeEach(() => {
        wrapper = mount(<Slipcase {...props} />)
    });

    it('should render the component', () => {
        const slipcase = wrapper.find(Slipcase);
        expect(slipcase.exists()).toBe(true);
    });

    it('should render Switch component', () => {
        const sc = wrapper.find(Switch);
        expect(sc.exists()).toBe(true);
    });

    it('should call handleSlipcase change when slipcase is on or off', () => {
        const sc = wrapper.find(Switch);
        sc.props().onChange({ target: { checked: true } });
        expect(props.handleSlipcaseChange).toHaveBeenCalledTimes(1);
        expect(props.handleSlipcaseChange).toHaveBeenCalledWith(true);
    })
})
