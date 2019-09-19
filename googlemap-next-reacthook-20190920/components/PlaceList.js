import React, { useState, useEffect } from 'react';
import * as PlaceListInfo from './PlaceListInfo';
import GoogleMapReact from 'google-map-react';

const ContactInfo = ({lat:lat,lng:lng}) => {
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

const PlaceList = () => {
    const [info,setInfo] = useState([{lat: '37.496217', lng:'127.052933'}]);

    const defaultProps = {
        center: {
          lat: 37.496217,
          lng: 127.052933
        },
        zoom: 17
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        PlaceListInfo.getPlaceList()
        .then(data => {
            console.log(data);
            setInfo(data);
        })
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <button type="submit">마커 불러오기</button>
        <div>{JSON.stringify(info)}</div>
        <div style={{ height: '80vh', width: '80%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBQwO5M6nWgns0yddNnHq8zNEDny6I1Isc" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {info.map((contact, i) => {
                    return (<ContactInfo 
                    lat={contact.lat}
                    lng={contact.lng}
                    key={i}/>);
                })}
            </GoogleMapReact>
            </div>
            </form>
       </div>
    );
}

export default PlaceList;