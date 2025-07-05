import React from 'react';

const Car = ({car, setCarForUpdate, deletebyId}) => {

    let {id, brand, price, year} = car;

    return (
        <div>
            <div>id - {id}</div>
            <div>brand - {brand}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=> {
                deletebyId(car)
            }}>delete</button>
        </div>
    );
};

export {Car};