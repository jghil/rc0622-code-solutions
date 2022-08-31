import React from 'react';
import * as ReactDOM from 'react-dom/client';

const firstReact = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log(firstReact);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(firstReact);
