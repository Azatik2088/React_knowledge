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
    <h1>Какое-то значение</h1>
    <h1>{firstName} {lastName}</h1>
    <ul>
      {/* <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
      <li>Элемент 4</li>
      <li>Элемент 5</li>
      <li>Элемент 6</li> */}
      {/* {elements.map(el => <li>{`Элемент ${el}`}</li>)} //темка нереальная */}
      {Array.from({ length: 5 }, (_, item) =>
        <li>{`Элемент ${getRandom() % 2 === 0 ? 'EVEN' : 'ODD'}`}</li>)}
    </ul>
    <p>© Авторские права мои {currentYear}</p>
    {/* <p>© Авторские права мои {new.Date().getFull;Year()}</p> */}
  </div>
);
//как можно было написать
// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello World!";
// const root = document.getElementById("root");
// root.appendChild(h1Element);
