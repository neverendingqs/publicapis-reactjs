import axios from 'axios';
const apiEndpoint = 'https://publicapis.org/api/entries';

export const APP_LOAD = 'APP_LOAD';

export const appLoad = () => ({
  type: APP_LOAD,
  payload: axios
    .get(apiEndpoint)
    .then(response => response.data.entries)
});
