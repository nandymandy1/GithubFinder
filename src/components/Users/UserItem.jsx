import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { id, login, avatar_url, html_url } }) => (
    <div className="card center text-center p-3">
        <img
            alt={login}
            src={avatar_url}
            style={{ width: '80px' }}
            className="rounded-circle mx-auto"
        />
        <h3>{login}</h3>
        <Link
            to={`/user/${login}`}
            className="btn btn-dark btn-sm mt-1 mb-2"
        >
            More
        </Link>
    </div>
)

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}


export default UserItem
