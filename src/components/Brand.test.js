import {shallow} from 'enzyme';
import { Marker } from 'react-leaflet';
import Brand from './Brand';



describe('Brand Component', () => {
  const mockLoc = {lat: 1, long: 1}
  let wrapper = shallow(<Brand brandName="Kick ass brand" location={mockLoc} desc="test"/>);


  it('renders learn react link', () => {
    expect(wrapper.text().includes("Kick ass brand")).toBeTruthy();
  });
  
  it('shows marker when expanded visible', () => {
    wrapper.instance().toggleExpanded();
    expect(wrapper.exists(Marker)).toBeTruthy();
  });
  
  it('does not show marker when expanded hidden', () => {
    expect(wrapper.find(Marker)).toEqual({})
  });

});