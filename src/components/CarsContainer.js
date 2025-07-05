import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {Cars} from "./Cars";
import {CarsForm} from "./CarsForm";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger])


    const deletebyId = async (car) => {
        await carService.deleteById(car.id);
        setTrigger(prev => !prev);
    }


    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} deletebyId={deletebyId}/>
        </div>
    );
};

export {CarsContainer};