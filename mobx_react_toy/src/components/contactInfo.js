import React from 'react';
import styled from 'styled-components';

export default ({lat:lat,lng:lng}) => {
    
    return(
        <div>
        <Marker lat={Number(lat)} lng={Number(lng)}>
        {'mark'}
        </Marker>
        </div>
    );
}

const Marker = styled.div`
    color: black;
    background: white;
    padding: 15px 10px;
    display: inline-flex;
    textAlign: center;
    alignItems: center;
    justifyContent: center;
    borderRadius: 50%;
    transform: translate(-50%, -50%);
`;

