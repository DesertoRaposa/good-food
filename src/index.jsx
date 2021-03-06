import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import './index.css';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
    <RestoServiceContext.Provider value={restoService}>
      <Router>
        <App />
      </Router>
    </RestoServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
