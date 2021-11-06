import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID f24w1Rk-XX34iGIfOE69DZOMkpViZSAasbaoD0KN9Y8'
      }
});