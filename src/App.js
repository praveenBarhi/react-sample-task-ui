import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Sample from '../src/components/Sample'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="main">
      <Provider store={Store}>
        <Sample />
      </Provider>
    </div>
  );
};

export default App;
