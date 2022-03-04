import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <FavoritesContextProvider>
   
    <BrowserRouter>
      <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
    
  </FavoritesContextProvider>,
  document.getElementById('root')
);

