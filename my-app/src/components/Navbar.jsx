import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const location = useLocation();


    const handleClick = event => {
       const url =event.currentTarget.dataset.to;
        window.location.href=url;

      };

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    <img src="https://webjump.com.br/wp-content/uploads/2021/12/webjump-compass-2x-min.png" alt="Webjump Logo" />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">PÁGINA INICIAL </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" data-to="/product?category=1" onClick={handleClick}>CAMISETAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" data-to="/product?category=2" onClick={handleClick}>CALÇAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" data-to="/product?category=3" onClick={handleClick}>SAPATOS</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">CONTATO</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <form className="d-none d-lg-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Buscar</button>
                        </form>
                    </div>


                </div>


            </div>
        </nav>
    )
}

export default Navbar