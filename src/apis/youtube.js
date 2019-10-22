import axios from 'axios';
const KEY = 'AIzaSyBzKilSOIWgn37Fhtu_ObgE8V21_lj-yIk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        key: KEY,
    }
})