import Repos from '../Repos/Repos';
import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import UserLoadingPage from '../utils/UserLoadingPage';

import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);
    const { user, repos, loading, getUser, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.handle);
        getUserRepos(match.params.handle);
        // eslint-disable-next-line
    }, []);

    const {
        bio,
        blog,
        name,
        login,
        company,
        html_url,
        hireable,
        location,
        following,
        followers,
        avatar_url,
        public_gists,
        public_repos
    } = user

    return (
        <div className="container">
            <Link className="btn btn-light" to="/">Go Back</Link>
            {loading ?
                (
                    <UserLoadingPage />
                ) : (
                    <>
                        <div className="card center text-center p-4 mt-3">
                            <img
                                src={avatar_url}
                                style={{ width: '150px' }}
                                className="rounded-circle mx-auto" alt=""
                            />
                            <h1>{name}</h1>
                            Hireable: {
                                hireable ?
                                    (
                                        <span className="text-success">
                                            <i className="far fa-check-circle fa-2x"></i>
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            <i className="far fa-times-circle fa-2x"></i>
                                        </span>
                                    )
                            }
                            <p>Location: {location}</p>
                            <div>
                                {bio && (
                                    <>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                    </>
                                )}
                                <a
                                    href={html_url}
                                    className="btn btn-dark mt-1 mb-1"
                                >
                                    Visit Github Profile
                                    </a>
                                <ul className="list-group mt-2">
                                    {login &&
                                        <li className="list-group-item">
                                            <strong>Login:</strong>{login}
                                        </li>
                                    }
                                    {company &&
                                        <li className="list-group-item">
                                            <strong>Company:</strong>{company}
                                        </li>
                                    }
                                    {blog &&
                                        <li className="list-group-item">
                                            <strong>Wesite:</strong>{blog}
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div
                            className="card text-center p-4 d-flex flex-row bd-highlight mb-3 justify-content-center"
                        >
                            <div className="badge badge-primary mb-2 ml-2">
                                Followers: {followers}
                            </div>
                            <div className="badge badge-success mb-2 ml-2">
                                Following: {following}
                            </div>
                            <div className="badge badge-danger mb-2 ml-2">
                                Public Repos: {public_repos}
                            </div>
                            <div className="badge badge-info mb-2 ml-2">
                                Public Gists: {public_gists}
                            </div>
                        </div>
                        <div className="mb-5">
                            <Repos repos={repos} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default User
