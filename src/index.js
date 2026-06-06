import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const currentYear = new Date().getFullYear();

const value = "Какие-то краточки с картинками";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container col-10">
    <h1 className='h1-style m-3'>{value}</h1>
    {Array.from({ length: 5 }, (_, item) =>
      <div className="card m-3" >
        <img src={`https://picsum.photos/${200 + item}/100`} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div>
    )}

    <p className='m-3'>© Авторские права мои {currentYear}</p>
  </div >


);
