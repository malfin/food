import React, {Suspense} from 'react';

import blank from '../static/img/blank.png'

const Cards = ({item}) => {
    return (
        <div className="card" key={item.id}>
            <Suspense fallback={<img src={blank} className="card-img-top" alt={item.name}/>}>
                <img src={item.image} className="card-img-top" alt={item.name}/>
            </Suspense>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p> {item.weight} гр.</p>
            </div>
            <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                    <h4>{item.price} ₽</h4>
                    <button className={"btn btn-outline-warning"}>Купить</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;