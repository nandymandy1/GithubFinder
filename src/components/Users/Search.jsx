/* eslint-disable */
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

const Search = () => {
    const [keyword, setText] = useState('');

    const githubContext = useContext(GithubContext);

    const { clearUsers, users, loading, searchUsers } = githubContext;

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (keyword === '') {
            Toast.fire({ icon: 'info', title: 'Search Keyword cannot be empty.' })
        } else {
            searchUsers(keyword)
            setText('')
        }
    }

    return (
        <div className="container p-5 card mt-4 bg-primary">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="keyword"
                    value={keyword}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Search users..."
                />
                <input
                    type="submit"
                    value="Search"
                    disabled={loading}
                    className="btn btn-light btn-block mt-3"
                />
            </form>
            <button
                onClick={clearUsers}
                disabled={users.length === 0}
                className="btn btn-light btn-block mt-2"
            >
                Clear
            </button>
        </div>
    )
}


export default Search
