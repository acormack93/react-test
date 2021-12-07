import { render, screen} from '@testing-library/react';
import {shallow} from 'enzyme';
import { Marker } from 'react-leaflet';
import Brand from './Brand';

test('renders learn react link', () => {
  render(<Brand brandName="Kick ass brand"/>);
  const linkElement = screen.getByText(/Kick ass brand/i);
  expect(linkElement).toBeInTheDocument();
});

test('opens link to URL on click', () => {
  const wrapper = shallow(<Brand brandName="Kick ass brand"/>);
  expect(wrapper.find(Marker)).toBeTruthy()
});

