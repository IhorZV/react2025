import React from 'react';

const Character = ({character}) => {
    let {id, name, status, species, gender, image} = character;
    return (
        <div>

                <div>{id}) - {name}, status - {status}  </div>
                <div> species - {species} </div>
                <div> gender - {gender} </div>
                <img style={{width: '200px'}} src={image} alt={name}/>

        </div>
    );
};

export {Character};