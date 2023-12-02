import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore} from "redux"
import {Provider} from "react-redux"
import combineReducers from "./Services/Reducer/index"
const store=legacy_createStore(combineReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn("store data",store);
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
