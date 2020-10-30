import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-a3d6a/us-central1/api' //THE API (the cloud function) URL
});

export default instance;