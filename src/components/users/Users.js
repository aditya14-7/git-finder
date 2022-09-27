import React, { useContext } from "react";
import Loader from "../layouts/Loader";
import UserItem from "./UserItem";
import GithubContext from "../../contexts/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    if(githubContext.loading){
        return (
            <Loader />
        )
    }
    return (
        <div className="" style={userStyle}>
            {githubContext.users.map(user => (
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