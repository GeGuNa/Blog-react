import axios from 'axios'

export const ajax = axios.create({
   baseURL: 'http://localhost:8269'
});

