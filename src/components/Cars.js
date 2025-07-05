import React from 'react';

import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, deletebyId}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} deletebyId={deletebyId}/>)}
        </div>
    );
};

export {Cars};