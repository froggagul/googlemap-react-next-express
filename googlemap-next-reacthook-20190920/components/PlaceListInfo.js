import axios from 'axios';

export function getPlaceList() {
    return (
        axios.get('http://localhost:5000/placelist')
        .then(response => {
            return response.data;
        })
        .catch(error =>{
            console.log('error');
        })
    );
}