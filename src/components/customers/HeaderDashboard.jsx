import React, { Fragment } from 'react';


const HeaderDashboard = () => {


    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown float-right">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <small className="">Nombre Cliente</small>
                            <img src="img/kfc.png" className="border rounded-circle d-inline-block align-top" width="30" height="30" alt="" loading="lazy" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Mi cuenta</a>
                            <a className="dropdown-item" href="#">Mis favoritos</a>
                            <a className="dropdown-item" href="#">Mis pedidos</a>
                            <a className="dropdown-item" href="#">Salir</a>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </Fragment>
    );
}
 
export default HeaderDashboard;