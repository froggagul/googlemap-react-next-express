import React from 'react';

export default ({lat:lat,lng:lng}) => {
    const style = {
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    };
    return(
        <div style={style}>
        <div lat={Number(lat)} lng={Number(lng)}>{'mark'}</div>
        </div>
    );
}
