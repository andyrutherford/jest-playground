import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import { WSAVERNOTSUPPORTED } from 'constants';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapper.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });

  //Force component to update
  wrapper.update();

  expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
});

it('clears text after submit', () => {
  wrapper.find('textarea').simulate('change', {
    target: { value: 'another comment'}
  });
  wrapper.update();
  wrapper.find('form').simulate('submit');
  wrapper.update();
  expect(wrapper.find('textarea').prop('value')).toEqual('');
});