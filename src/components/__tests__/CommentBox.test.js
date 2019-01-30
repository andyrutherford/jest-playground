import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and 2 button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

//Group together tests with common behavior
describe('the text area', () => {

  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears text after submit', () => {
    // expect(wrapper.find('textarea').prop('value')).toEqual('another comment');
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});