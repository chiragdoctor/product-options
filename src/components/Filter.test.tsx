import React from 'react';
import { mount } from 'enzyme';
import Filters from './Filters';
import InputRadio from './InputRadio';
import Slipcase from './Slipcase';


describe('Filters Component', () => {
    let wrapper: any;
    let handleInputChangeSpy = jest.fn();
    let handleSlipcaseChangeSpy = jest.fn();
    let mockColourValue = 'red';
    let mockPaperTypeValue = 'dotted';
    let mockSlipcaseValue = false;

    beforeEach(() => {
        wrapper = mount(
            <Filters
                handleInputChange={handleInputChangeSpy}
                handleSlipcaseChange={handleSlipcaseChangeSpy}
                colourValue={mockColourValue}
                paperTypeValue={mockPaperTypeValue}
                slipcaseValue={mockSlipcaseValue}
            />
        )
    });

    it('should render the component', () => {
        const pc = wrapper.find(Filters);
        expect(pc.exists()).toBe(true);
    });

    it('should render InputRadio for colours', () => {
        const radio = wrapper.find(InputRadio).first();
        expect(radio.exists()).toBe(true);
        expect(radio.props().value).toBe('red');
        expect(radio.props().label).toBe('Color');
    });

    it('should render InputRadio for paper type', () => {
        const radio = wrapper.find(InputRadio).at(1);
        expect(radio.exists()).toBe(true);
        expect(radio.props().value).toBe('dotted');
        expect(radio.props().label).toBe('Paper type');
    });

    it('should render Switch for slipcase', () => {
        const slipcase = wrapper.find(Slipcase);
        expect(slipcase.exists()).toBe(true);
    });
})
