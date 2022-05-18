import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const Header = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/category/')
            .then((result) => {
                setCategory(result.data)
            })
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-while">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>FoodADA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {category.map(item => (
                            <li className="nav-item" key={item.id}>
                                <Link className="nav-link" to={`/${item.name}`}>{item.name}</Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Личный кабинет</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;