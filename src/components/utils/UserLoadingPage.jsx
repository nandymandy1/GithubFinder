import React from 'react'

const UserLoadingPage = () => {
    return (
        <>
            <div className="card center text-center p-4 mt-3">
                <div className="mx-auto sub-img-1"></div>
                <div className="mx-auto" style={{ width: '20rem' }}>
                    <div className="heading-loading"></div>
                    <div className="mt-2 text-loading"></div>
                    <div className="mt-2 text-loading"></div>
                    <div style={{ width: '5rem' }} className="mx-auto">
                        <div className="heading-loading"></div>
                    </div>
                </div>
                <div className="mt-2 text-loading"></div>
                <div className="mt-2 text-loading"></div>
                <div style={{ width: '10rem' }} className="mx-auto">
                    <div className="heading-loading"></div>
                </div>
                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <div style={{ width: '10rem' }} className="mx-auto">
                            <div className="mt-2 text-loading"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card text-center p-4 d-flex flex-row bd-highlight mb-3 justify-content-center">
                <div className="mt-2 text-loading" style={{ width: '7rem', height: '30px' }}></div>
                <div className="mt-2 text-loading" style={{ width: '7rem', height: '30px' }}></div>
                <div className="mt-2 text-loading" style={{ width: '7rem', height: '30px' }}></div>
                <div className="mt-2 text-loading" style={{ width: '7rem', height: '30px' }}></div>
            </div>
        </>
    )
}

export default UserLoadingPage