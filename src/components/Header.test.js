import { render, screen} from '@testing-library/react';
import Header from './Header'
import {shallow} from 'enzyme';

test('check for main text', () => {
  render(<Header />);
  const linkElement = screen.getByText(/written by/i);
  expect(linkElement).toBeInTheDocument();
});

test('opens link to URL on click', () => {
  const spy = jest.spyOn(Header.prototype, 'handleClick');
  const wrapper = shallow(<Header />);
  wrapper.find({"testid": "author-link"}).simulate('click')
  expect(spy).toHaveBeenCalled()
  expect(global.open).toBeCalled()
});

