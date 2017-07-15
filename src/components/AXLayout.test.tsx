import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AXLayout from './AXLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AXLayout />, div);
});
