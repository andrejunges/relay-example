if (module.hot) { module.hot.accept(); }

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import AppRoute from './routes/AppRoute'
import Group from './components/Group'

ReactDOM.render(
  <Relay.RootContainer
    Component={Group}
    route={new AppRoute()}
  />,
  document.getElementById('container')
);