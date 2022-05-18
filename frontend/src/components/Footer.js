import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-3 mt-3">
            <div className="row">
                <div className="col mt-4">
                    <h2 className="px-4">FOODADA</h2>
                </div>
                <div className="col">
                    <Link to={'/'} className="nav-link px-2 text-muted">Работа у нас</Link>
                    <Link to={'/'} className="nav-link px-2 text-muted">Гарантия</Link>
                </div>
                <div className="col">
                    <Link to={'/'} className="nav-link px-2 text-muted">Правовая информация</Link>
                    <Link to={'/'} className="nav-link px-2 text-muted">Пищевая ценность</Link>

                </div>
                <div className="col justify-content-center">
                    <Link to={'/'} className="nav-link px-2 text-muted">Помощь</Link>
                    <Link to={'/'} className="nav-link px-2 text-warning">Корпоративные заказы</Link>
                </div>
                <div className="col mt-4">
                    8 800 555-35-35
                    Звонок бесплатный
                </div>
            </div>
            {/*<p className="text-center text-muted mt-3">© 2021 Company, Inc</p>*/}
        </footer>
    );
};

export default Footer;