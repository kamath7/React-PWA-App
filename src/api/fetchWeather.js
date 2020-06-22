import axios from 'axios';


const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY= `2c5677fecbb40ee8ae1df7f5784ceca8`;
export const fetchWeather = async(query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}

