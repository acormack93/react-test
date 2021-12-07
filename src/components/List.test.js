import List from './List'
import {shallow} from 'enzyme';
import Brand from './Brand';

describe('List Component', () => {
  let f = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([ { "id": "a9ebeb9a-8d0b-41f6-9123-cf12dc1c8fae", "brandName": "Brand 1", "location": {"lat": 51.505, "long": -0.9}}]),
    })
  );

  let wrapper = shallow(<List />);


  it('renders list of Brands', () => {
    expect(wrapper.find(Brand).length).toBe(1);
  });

  afterAll(() => {
    global.fetch = f;
  })
});