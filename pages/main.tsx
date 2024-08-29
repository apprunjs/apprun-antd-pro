import app from 'apprun';
import React from 'react';
import ReactDOM from 'react-dom/client';
app.use_react(React, ReactDOM);

import Layout from './components/layout'
import Comic from './components/comic';

export default () => {
  app.webComponent('ws-comic', Comic);
  const root = document.getElementById('root');
  app.render(root, <Layout />);
}
