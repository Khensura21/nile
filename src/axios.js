import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-a3d6a.cloudfunctions.net/api", //THE API (the cloud function) URL
  // "http://localhost:5001/challenge-a3d6a/us-central1/api", //THE API (the cloud function) URL => {localcd}
});

export default instance;