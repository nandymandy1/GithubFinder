import React from 'react'

const UserLoadingItem = () => {
    return (
        <div className="row">
            {
                [1, 2, 3, 4].map(
                    i => (
                        <div className="col-md-4 col-lg-3 col-sm-6 p-3" key={i}>
                            <div className="card center text-center p-3">
                                <div className="sub-img mx-auto"></div>
                                <p className="heading-loading"></p>
                                <p className="action-loading"></p>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default UserLoadingItem