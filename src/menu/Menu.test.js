import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

import jQuery from 'jquery';
const $ = jQuery;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});