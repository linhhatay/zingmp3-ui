import axios from 'axios';

fetch('https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const songsApi = response;
    });
