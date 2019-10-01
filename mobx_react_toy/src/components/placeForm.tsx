import React, { Component } from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

interface PlaceForm extends Component {
    lat:string;
    lng:string;
}
@observer
class PlaceForm extends Component {
  @observable lat='';
  @observable lng='';
    render() {
    return (
      <form action='http://localhost:5000/placelist' method='post'>
        <input
          placeholder="위도"
          value={this.lat}
          onChange={(e)=>(this.lat=e.target.value)}
          name="lat"
        />
        <input
          placeholder="경도"
          value={this.lng}
          onChange={(e)=>(this.lng=e.target.value)}
          name="lng"
        />
        <button type="submit">마커등록</button>
      </form>
    );
    }
}

export default PlaceForm;