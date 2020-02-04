import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID ce7b8e01bf3cd9e9643617c55fc5b0f82ae46ddcc7dba2229002490688ba7906',
  }
});