import React from 'react'
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
    return (
        <div className="card p-3">
            <h5>
                <a href={repo.html_url}>{repo.name}</a>
            </h5>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired
}

export default Repo