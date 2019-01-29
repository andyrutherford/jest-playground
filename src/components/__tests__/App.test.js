import React from 'react';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { shallow, render } from 'enzyme';

let wrapper;

beforeEach(() => {
  wrapper = shallow( <App /> );
});

it('shows a comment box', () => {
  //Expect one instance of CommentBox inside App
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {

  //Expect one instance of CommentList inside App
  expect(wrapper.find(CommentList).length).toEqual(1);
});

it('shallow render with enzyme', () => {
  const wrapper = shallow( <App /> );
  expect(wrapper).toMatchSnapshot();
});

it('render with enzyme', () => {
  const wrapper = render( <App /> );
  expect(wrapper).toMatchSnapshot();
});