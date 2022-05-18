import React from 'react';
import parse from 'html-react-parser';


const Cards = ({item}) => {
    return (
        <>
            <div className="card" key={item.id}>
                <img src={item.image} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        {parse(item.desk)}
                    </p>
                    <p> {item.weight} гр.</p>
                    {/*<p className="card-text">*/}
                    {/*    /!*{item.weight && item.weight}*!/*/}
                    {/*    */}
                    {/*    <hr/>*/}
                    {/*    <h5>Пищевая ценность продукта на 100 г:</h5>*/}
                    {/*    {item.nutritional_value ? parse(item.nutritional_value) : 'Нету данных'}*/}
                    {/*</p>*/}
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4>{item.price} ₽</h4>
                        <button className={"btn btn-outline-warning"}>Купить</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;