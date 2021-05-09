import React from 'react';
import { mount } from 'enzyme';
import ProductConfigurator from './ProductConfigurator';


describe('Product Configurator Component', () => {
  let wrapper: any; 
  beforeEach(() => {
    wrapper = mount(<ProductConfigurator />)
  })

  it('should render the component', () => {
    const pc = wrapper.find(ProductConfigurator);
    expect(pc.exists()).toBe(true);
  });

  it('should render the title', () => {
    const title = wrapper.find('h3');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Product Configurator');
  })
})
