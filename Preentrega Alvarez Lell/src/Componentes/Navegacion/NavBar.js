import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from "./CartWidget"

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">El Club de la Mofeta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-left">
                        <li className="nav-item">
                           <Link className="nav-link" to='/Inicio' > Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/Nosotros' > Nosotros</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/Tienda' > Tienda</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CartIcon />
                        <input className="form-control me-2" type="search" placeholder="Busquetti" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar </button>
                    </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default navbar