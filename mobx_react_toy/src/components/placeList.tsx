import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {observer} from "mobx-react";
import {observable, action} from "mobx";
import ContactInfo from './contactInfo';
import * as PlaceListInfo from '../dispatcher/placeListInfo';

interface PlaceList extends Component {
    defaultProps:{
        center: {
            lat:number;
            lng:number;
        }
        zoom: number;
    };
    info : {lat:string, lng:string}[];
}
@observer
class PlaceList extends Component {
    defaultProps = {
        center: {
          lat: 37.496217,
          lng: 127.052933
        },
        zoom: 17
    };
    
    @observable info = [{lat: '37.496217', lng:'127.052933'}];
    
    @action
    handleSubmit= (e)=> {
        e.preventDefault();
        PlaceListInfo.getPlaceList()
        .then(data => {
            console.log(data);
            this.info=data;
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <button type="submit">마커 불러오기</button>
                <div>{JSON.stringify(this.info)}</div>
                <div style={{height: '80vh', width: '80%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBQwO5M6nWgns0yddNnHq8zNEDny6I1Isc" }}
                defaultCenter={this.defaultProps.center}
                defaultZoom={this.defaultProps.zoom}
                >
                {this.info.map((contact, i) => {
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
}

export default PlaceList;
