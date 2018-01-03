import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <h3>Page Not Found</h3>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default ErrorPage;