import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

// it('renders correctly', () => {
//   const wrapper = shallow(
//     <CommentBox />
//   );
//   expect(wrapper).toMatchSnapshot();
// });

it('has a text area and a button', () => {
  const wrapper = mount(<CommentBox />);
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});