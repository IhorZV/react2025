import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/UserService";
import {Title} from "./Title";

const Titles = () => {
    const {id} = useParams();

    const [titels, setTitels] = useState([]);

    useEffect(() => {

        userService.getByIdPosts(+id).then(({data}) => setTitels(data));

    }, [id])

    console.log(titels);

    return (
        <div>
            {titels.map(titel => <Title key={titel.id} titel={titel}/>)}
        </div>
    );
};

export {Titles};