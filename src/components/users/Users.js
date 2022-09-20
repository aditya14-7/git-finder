import React from "react";
import Loader from "../layouts/Loader";
import UserItem from "./UserItem";

const Users = (props) => {
    if(props.loading){
        return (
            <Loader />
        )
    }
    return (
        <div className="" style={userStyle}>
            {props.userData.map(user => (
                <UserItem userData={user} key={user.id} />
            ))}
        </div>
    )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users;