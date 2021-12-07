import List from './List'
import {shallow} from 'enzyme';
import Brand from './Brand';

describe('List Component', () => {
  let wrapper = shallow(<List />);

  it('renders list of Brands', () => {
    expect(wrapper.find(Brand).length).toBe(4)
  });

});