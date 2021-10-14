import React, { useState, useEffect } from 'react';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import { Link } from 'react-router-dom';

//components
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const[categories, setCategories] = useState([]);
    const[dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
    const closeDropdown = () => setDropdown(false);

    useEffect(async () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                let cat_arr = [];
                $.each(json, (i, obj) => {
                    if(!cat_arr.includes(obj.category)){
                        cat_arr = [...cat_arr, obj.category];
                    }
                });
                setCategories(cat_arr);
            });
    }, [/*when component did mount*/]); 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={closeDropdown}>YouMayNeedThis</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" onClick={closeDropdown}>Inicio</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" onClick={toggleOpen} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                        </a>
                        <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/Products" onClick={toggleOpen}>Todos</Link>
                            {categories.map((categ) => {
                                const urlCateg = encodeURIComponent(categ);
                                return(
                                    <Link key={urlCateg} className="dropdown-item" to={`/Products/${urlCateg}`} onClick={toggleOpen}>{categ}</Link>
                                );
                            })}
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact" onClick={closeDropdown}>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={closeDropdown}>
                            <CartWidget itemsCount="0" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
