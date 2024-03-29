import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './component/context/auth';
import SearchContext from './component/context/serchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
  <Auth>
    <SearchContext>
      <App />
    </SearchContext>
  </Auth>
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
