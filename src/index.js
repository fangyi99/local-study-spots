import React from 'react';
import ReactDOM from 'react-dom';
import DataContextProvider from './DataContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
