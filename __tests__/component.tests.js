import Title from '../client/src/components/Title.jsx';
import React from 'react';
import { shallow } from 'enzyme';
//renders a title
test('render a title', () => {
  const wrapper = shallow(
      <Title>Hello Jest!</Title>
  );
  expect(wrapper).toMatchSnapshot();
});