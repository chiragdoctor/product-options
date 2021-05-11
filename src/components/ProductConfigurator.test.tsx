import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ProductConfigurator from './ProductConfigurator';
import Filters from './Filters';
import ProductSummary from './ProductSummary';
import productOptions from '../data/productOptionsData.json';

describe('Product Configurator Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<ProductConfigurator />)
  });

  it('should render the component', () => {
    const pc = wrapper.find(ProductConfigurator);
    expect(pc.exists()).toBe(true);
  });

  it('should render the title', () => {
    const title = wrapper.find('h3');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Product Configurator');
  });

  it('should render Filter component', () => {
    const fc = wrapper.find(Filters);
    expect(fc.exists()).toBe(true);
  });

  it('should render red, dotted, without slipcase product at initial render', () => {
    const summary = wrapper.find(ProductSummary);
    expect(summary.props().product).toEqual(productOptions.products[0]);
    expect(summary.props().product['item-description']).toEqual('Sunset notebook with dotted paper');
  });

  it('should render blue, lined with slipcase product when user selects a perticular product', () => {
    const filters = wrapper.find(Filters);
    act(() => {
      filters.props().handleInputChange('color', 'blue');
    });
    act(() => {
      wrapper.update();
    });
    act(() => {
      filters.props().handleInputChange('paper type', 'lined');
    });
    act(() => {
      wrapper.update();
    });
    act(() => {
      filters.props().handleSlipcaseChange(true);
    });
    act(() => {
      wrapper.update();
    });
    const summary = wrapper.find(ProductSummary);
    expect(summary.props().product['item-description']).toEqual('Ocean notebook with lined paper and Slipcase');
  })
})
