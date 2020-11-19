import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//API call returns an array of motivational quotes. One is chosen at random and then is displayed in the quote div along with the author and propper formatting for a quotation

fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => document.getElementById('quote').innerHTML=('"'+(data[Math.floor(Math.random() * data.length)].text)+'" - '+ (data[Math.floor(Math.random() * data.length)].author)))
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




