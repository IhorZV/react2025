import React from 'react';

const Simpson = ({simpson}) => {
    let {id, name, age, info, photo} = simpson;
    return (
        <div>
            <div>{id}) - {name}, age - {age}  </div>
            <div> {info} </div>
            <img style={{width: '200px'}} src={photo} alt={age}/>
        </div>
    );
};

export {Simpson};