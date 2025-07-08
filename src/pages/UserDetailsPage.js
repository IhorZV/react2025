import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../services/UserService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user);
        } else {
            userService.getById(id).then(({data}) => setUserDetails(data));
        }

    }, [id, state]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};


export {UserDetailsPage};