import axios from "axios";

axios.defaults.baseURL = 'https://freeflow-api-5d3396ab0611.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;