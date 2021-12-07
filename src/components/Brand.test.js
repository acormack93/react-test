import { render, screen} from '@testing-library/react';
import {shallow} from 'enzyme';
import { Marker } from 'react-leaflet';
import Brand from './Brand';



describe('Brand Component', () => {
  const mockLoc = {lat: 1, long: 1}
  let wrapper = shallow(<Brand brandName="Kick ass brand" location={mockLoc}/>);


  it('renders learn react link', () => {
    expect(wrapper.text().includes("Kick ass brand")).toBeTruthy();
  });
  
  it('opens link to URL on click', () => {
    expect(wrapper.find(Marker)).toBeTruthy()
  });

});