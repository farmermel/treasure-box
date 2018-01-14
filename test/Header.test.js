import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/Header.js';

describe('Header', () => {
  let wrapper;
  const mockFunction = jest.fn()
  let mockState = {
      title: '',
      body: '',
      search: '',
      treasures: [],
      treasuresToRender: []
    }

  beforeEach( () => {
    wrapper = shallow(<Header onChange={mockFunction}
                              submitTreasure={mockFunction}
                              data={mockState} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render components', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should take props', () => {
    expect(typeof wrapper.instance().props.onChange).toEqual('function');
    expect(typeof wrapper.instance().props.submitTreasure).toEqual('function');
    expect(typeof wrapper.instance().props.data).toEqual('object')


  })
})