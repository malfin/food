import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";

// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

import './static/css/main.modules.css'

import Header from "./components/Header";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


const App = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then((result) => {
                setProducts(result.data)
            })
    }, [])

    return (
        <Router>
            <div className={"container"}>
                <Header/>
                <Route exact path={'/'}>
                    <Slider/>
                    <div className="d-flex justify-content-between align-content-center flex-wrap mt-3">
                        {products.map(item => (
                            <Cards item={item} key={item.id}/>
                        ))}
                    </div>
                </Route>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;