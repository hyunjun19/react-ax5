import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import AXLayout from './AXLayout';

describe('<AXLayout />', () => {
  it('[shallow] should render [data-axrlayout="ax5"] prop.', () => {
    const wrapper = shallow(<AXLayout />);
    console.log('shallow', wrapper.debug());
    expect(wrapper.prop('data-ax5layout')).toEqual('ax5');
  });

  it('[mount] should render [data-axrlayout="ax5"] prop.', () => {
    const wrapper = mount(<AXLayout />);
    console.log('mount', wrapper.debug());
    expect(wrapper.find('[data-ax5layout="ax5"]').length).toEqual(1);
  });

  it('[render] should render [data-axrlayout="ax5"] prop.', () => {
    const wrapper = render(<AXLayout />);
    console.log('render', wrapper.html());
    expect(wrapper.find('[data-ax5layout="ax5"]').length).toEqual(1);
  });
});
