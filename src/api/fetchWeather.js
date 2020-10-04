import axios from 'axios';

    const URL='https://api.openweathermap.org/data/2.5/weather'
    const api_key = 'd5a65c7670430d76e602d06f8d1a6264'


    export const fetchWeather = (query) => {
        return new Promise((resolve, reject) => {
            axios.get(URL, {
                params: {
                    q: query,
                    units: 'matric',
                    APPID: api_key,
                }
            }).then(
                response => {
                    resolve(response.data);
                }
            ).catch(err => reject(err));
        })
    }