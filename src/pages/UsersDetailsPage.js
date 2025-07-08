import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UsersDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user);
        } else {
            userService.getById(id).then(({data}) => setUserDetails(data));
        }
    }, [id, state])

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UsersDetailsPage};