import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to="/data" >Data</Link>
        </div>
    );
}

export default Navigation;