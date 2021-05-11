import React from 'react';
import { mount } from 'enzyme';
import InputRadio from './InputRadio';
import { Radio, RadioGroup } from '@material-ui/core';


describe('Input Radio Component', () => {
    let wrapper: any;
    let handleInputChangeSpy = jest.fn();
    const props = {
        label: 'Colors',
        value: 'red',
        data: [
            {
                "id": "cc1",
                "type": "cover-colour",
                "value": "red",
                "label": "Sunset"
            },
            {
                "id": "cc2",
                "type": "cover-colour",
                "value": "blue",
                "label": "Ocean"
            }
        ],
        handleInputChange: handleInputChangeSpy
    }
    beforeEach(() => {
        wrapper = mount(<InputRadio {...props} />)
    });

    it('should render the component', () => {
        const radio = wrapper.find(InputRadio);
        expect(radio.exists()).toBe(true);
    });

    it('should render span with label', () => {
        const label = wrapper.find('#radio-label').find('span');
        expect(label.exists()).toBe(true);
        expect(label.text()).toBe('Colors');
    });

    it('should render two radio buttons', () => {
        const radios = wrapper.find(Radio);
        expect(radios.exists()).toBe(true);
        expect(radios).toHaveLength(2);
    });

    it('should call handleInputChange onChange of radio button value', () => {
        const radioGroup = wrapper.find(RadioGroup);
        radioGroup.props().onChange({ target: { value: 'blue' } });
        expect(props.handleInputChange).toHaveBeenCalledTimes(1);
        expect(props.handleInputChange).toHaveBeenCalledWith(props.label, 'blue');
    });
})
