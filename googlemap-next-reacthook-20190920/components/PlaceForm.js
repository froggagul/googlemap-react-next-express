import React, { useState, useEffect } from 'react';

const PlaceForm = () => {
  const [lat,setlat] = useState('');
  const [lng,setlng]= useState('');

    return (
      <form action='http://localhost:5000/placelist' method='post'>
        <input
          placeholder="위도"
          value={lat}
          onChange={(e)=>setlat(e.target.value)}
          name="lat"
        />
        <input
          placeholder="경도"
          value={lng}
          onChange={(e)=>setlng(e.target.value)}
          name="lng"
        />
        <button type="submit">마커등록</button>
      </form>
    );
}

export default PlaceForm;