import React, { useContext } from 'react';
import UserItem from './UserItem';

import UserLoadingItem from '../utils/UserLoadingRow';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    return (
        <section className="container mt-5">
            {
                loading ? (
                    <UserLoadingItem />
                ) : (
                        <div className="row">
                            {
                                users.map(
                                    user => (
                                        <div
                                            key={user.id}
                                            className="col-md-4 col-lg-3 col-sm-6 p-3"
                                        >
                                            <UserItem user={user} />
                                        </div>
                                    )
                                )
                            }
                        </div>
                    )
            }
        </section>
    )
}

export default Users
