import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-4e300/us-central1/api'//api url
});

export default instance;