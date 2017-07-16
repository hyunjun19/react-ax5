import * as React from 'react';
import * as enzyme from 'enzyme';
import AXLayout from './AXLayout';

describe('<AXLayout />', () => {
  it('AXLayout DOM rendering test', () => {
    const axLayout = enzyme.shallow(<AXLayout />);
    expect(axLayout.prop('data-ax5layout')).toEqual('ax5');
  });
});
