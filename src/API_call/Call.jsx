// GETCall.js
import axios from "axios";


const URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA/";

const GETCall = async (index) => {

    const response = await axios.get(URL + index);
    const data = response.data;
    return data; 
 
};




export default GETCall;

