import React from 'react';

function Three(props) {
    const t = false;
    return (
        <div>
           { t ? <h1>True</h1> : <h1>false</h1> }
        </div>
    );
}


export default Three;