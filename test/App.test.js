import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render header and treasures components', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Treasures').length).toEqual(1);
  })

  it('should store title, body, and search input', () => {
    expect(wrapper.state().title).toEqual('');
    expect(wrapper.state().body).toEqual('');

    wrapper.setState({ title: 'blah',
                       body: 'yep' });
    expect(wrapper.state().title).toEqual('blah');
    expect(wrapper.state().body).toEqual('yep');
  })

  it('should select a suggestion when clicked', () => {
    wrapper = mount(<App />)
    const event = {target: {value: "Denv"}};
    
    wrapper.find('input').first().simulate('change', event);
    expect(wrapper.state().title).toEqual('Denv');
  })


})
