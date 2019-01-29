import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from '../CommentBox';
import { shallow } from 'enzyme';

it('should render correctly', () => {
  const wrapper = shallow(<CommentBox />);
  expect(wrapper).toMatchSnapshot();
});
