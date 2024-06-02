import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import torta from '../../assets/img/torta-cumpleaños.jpg';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Bienvenido a happy cake</h1>
      <p className="text-center">el lugar de los pasteles felices.</p>
      <div className="d-flex justify-content-center">
        <img src={torta} alt="Example" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
