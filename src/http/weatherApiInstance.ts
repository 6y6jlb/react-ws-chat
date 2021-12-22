import axios from "axios";


const baseURL = 'https://api.openweathermap.org/data/2.5/weather/';
export default axios.create({baseURL});

