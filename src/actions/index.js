import axios from 'axios';
const apiEndpoint = 'https://publicapis.org/api/entries';

export const APP_LOAD = 'APP_LOAD';
export const SEARCH_UPDATE = 'SEARCH_UPDATE';

export const appLoad = () => ({
  type: APP_LOAD,
  payload: axios
    .get(apiEndpoint)
    .then(response => response.data.entries)
});

export const searchUpdate = (searchTerm) => ({
  type: SEARCH_UPDATE,
  payload: searchTerm
});
