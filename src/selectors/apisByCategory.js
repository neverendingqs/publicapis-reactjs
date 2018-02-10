import { createSelector } from 'reselect';

const rawDataSelector = state => state.rawData;

export default createSelector(
  rawDataSelector,
  rawData => rawData.reduce(
    (acc, api) => {
      if(acc[api.Category]) {
        acc[api.Category].push(api);
      } else {
        acc[api.Category] = [];
      }

      return acc;
    },
    {}
  )
);
