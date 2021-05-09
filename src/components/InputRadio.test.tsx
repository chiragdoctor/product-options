import React from 'react';
import { mount } from 'enzyme';
import InputRadio from './InputRadio';
import { Radio } from '@material-ui/core';


describe('Input Radio Component', () => {
    let wrapper: any;
    const props = {
        label: 'Colors',
        defaultValue: 'red',
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
        ]
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
})
