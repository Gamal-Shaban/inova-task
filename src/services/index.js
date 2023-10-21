import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(async request => {
  if (request.headers['Content-Type'] !== 'multipart/form-data') {
    request.headers['Content-Type'] = 'application/json';
    request.headers.Accept = 'application/json';
  }
  request.headers.Authorization =
    'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx';
  return request;
});

export {API};
