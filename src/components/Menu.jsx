import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light capaArriba">
    <div className="app">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link text-success activo"
            aria-current="page"
            href="index.html"
          >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="pages/nosotros.html">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="pages/arauquitos.html">
            Arauquitos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="pages/newIn.html">
            Shop
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-success" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Temporadas
          </a>
          <ul
            className="dropdown-menu text-success"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown text-success" href="pages/origen.html">
                Orígen - AW ´21
              </a>
            </li>
            <li>
              <a className="dropdown text-success" href="pages/transitar.html">
                Transitar - SS ´21
              </a>
            </li>
            <li>
              <a className="dropdown text-success" href="pages/audaz.html">
                Audaz - AW ´20
              </a>
            </li>
            <li>
              <a className="dropdown text-success" href="pages/lucida.html">
                Lúcida - SS ´20
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="pages/agregarCliente.html">
            Inscribirse
          </a>
        </li>
      </ul> 
    </div>
    </nav>
  );
}

export default Menu
