import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1>pagina de contactos</h1>
      <p>Cuentanos ¿en que te podemos ayudar?</p>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
