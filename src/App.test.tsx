import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper: any; 
  beforeEach(() => {
    wrapper = mount(<App />)
  })
  it('should render default text', () => {
    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('Product Configurator');
  })
})
