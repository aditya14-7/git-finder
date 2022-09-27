import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    const { login, id, avatar_url } = props.userData;
    return (
        <div className='card text-center' key={id} >
            <img src={avatar_url} className='round-img' style={{ width: '60px' }} alt='avatar' />
            <h3>{login}</h3>
            <div>
                <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>More</Link>
            </div>
        </div>
    )
}
export default UserItem;