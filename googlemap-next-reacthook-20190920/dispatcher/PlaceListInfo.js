import axios from 'axios';

export default function getPlaceList() {
    return (
        axios.get('http://localhost:5000/placelist')
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error =>{
            console.log('error');
        })
    );
}
