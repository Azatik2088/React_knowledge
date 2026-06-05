import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstName = "Azatik";
const lastName = "Shagabiev"
const currentYear = new Date().getFullYear();
const elements = ["1", "2", "3", "4", "5",]
function getRandom() {
  return Math.floor(Math.random() * 10);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='h1-style'>Какое-то значение</h1>
    <h1 className='h1-style'>{firstName} {lastName}</h1>
    <ul>
      {Array.from({ length: 5 }, (_, item) =>
        <li key={item}>{`Элемент ${getRandom() % 2 === 0 ? 'EVEN' : 'ODD'}`}</li>)}
    </ul>
    <p>© Авторские права мои {currentYear}</p>
  </div>
);
