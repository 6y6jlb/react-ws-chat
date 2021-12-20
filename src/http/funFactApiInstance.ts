import axios from "axios";


const baseURL = 'http://api.fungenerators.com/fact/';
const dayFactApiInstance = axios.create({baseURL});
export default dayFactApiInstance;

