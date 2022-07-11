import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { FilterContextProvider } from './context/filter-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </BrowserRouter>
);


