import axios from 'axios';

const customAxios = axios.create({
    // You can add any default configurations here
});

// Override the global process object for this axios instance
customAxios.defaults.adapter = require('axios/lib/adapters/xhr');

export default customAxios;