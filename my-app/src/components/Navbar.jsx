import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const state = useSelector(state => state.handleCart);

    const handleClick = (categoryID) => {
        window.location.href = `/product?category=${categoryID}`;
    };

    async function fetchCategories() {
        try {
            const response = await fetch('/mock-api/V1/categories/list');
            if (!response.ok) {
                throw new Error('Erro ao obter os dados da API');
            }
            const data = await response.json();
            setCategories(data.items); 
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCategories(); 
    }, []);

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
                            <NavLink className="nav-link" to="/">Página Inicial </NavLink>
                        </li>
                        {/* Renderiza dinamicamente os itens da lista de categorias */}
                        {categories.map(category => (
                            <li className="nav-item" key={category.id}>
                                <NavLink className="nav-link" to={`/product?category=${category.id}`} onClick={() => handleClick(category.id)}>
                                    {category.name}
                                </NavLink>
                            </li>
                        ))}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contato</NavLink>
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
    );
};

export default Navbar;
