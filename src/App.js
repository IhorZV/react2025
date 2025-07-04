import React, {useRef} from 'react';

const App = () => {

    const name = useRef();
    const age = useRef();


    const save = (e) => {
        e.preventDefault();
        const user = {
            name: name.current.value,
            age: age.current.value
        };
        console.log(user)
    }


    return (
        <div>
            <form>
                <input type="text" placeholder="name" ref={name}/>
                <input type="text" placeholder="age" ref={age}/>
                <button onClick={save}> save</button>
            </form>
        </div>
    );
};

export {App};