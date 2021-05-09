import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import ProductConfigurator from './components/ProductConfigurator';

describe('App Component', () => {
  let wrapper: any; 
  beforeEach(() => {
    wrapper = mount(<App />)
  })
  it('should render product configurator component', () => {
    const pc = wrapper.find(ProductConfigurator);
    expect(pc.exists()).toBe(true);
  })
})
