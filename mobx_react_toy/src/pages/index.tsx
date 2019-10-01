import * as React from 'react';
import styled from 'styled-components';
import PlaceForm from '../components/placeForm';
import PlaceList from '../components/placeList';

const Index = () => {
    return(<div>
        <Maybe>Main page</Maybe><br/>
        <PlaceForm/>
        <PlaceList/>
    </div>);
}

export default Index;

const Maybe = styled.div`
    color: red;
`;
