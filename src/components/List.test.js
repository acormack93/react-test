import List from './List'
import {shallow} from 'enzyme';
import Brand from './Brand';

describe('List Component', () => {
  let f = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        data: [
          {id: '1', name: 'Brand 1', stores: ['a'], website: 'www.a.com' }
        ],
        embedded: {stores: [
          {id: 'a', latitude: 1, longitude: 1}
        ]}
      }),
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