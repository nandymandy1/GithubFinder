import React from 'react'

const NotFound = () => {
    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 className="display-4">404 Not Found</h1>
            <p className="text-center">OOPs! Looks that page you are looking for is not found.</p>
        </div>
    )
}

export default NotFound