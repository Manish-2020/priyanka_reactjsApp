import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='btn btn-primary'>Hello coder1234 </div>
    <div className='d-flex'>
      <div>1</div>
      <div>2</div>

      <div>3</div>

      <div>4</div>

      <div>5</div>

    </div>
    <Home />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
