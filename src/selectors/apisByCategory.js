import latinize from 'latinize';
import { createSelector } from 'reselect';

const rawDataSelector = state => state.rawData;
const searchTermSelector = state => state.searchTerm;

const filterBySearchGenerator = searchTerm => {
  const searchTermUpper = latinize(searchTerm).toUpperCase();
  return field => latinize(field).toUpperCase().includes(searchTermUpper);
};

export default createSelector(
  [rawDataSelector, searchTermSelector],
  (rawData, searchTerm) => {
    let apis = rawData;

    if(searchTerm) {
      const filterBySearch = filterBySearchGenerator(searchTerm);
      apis = apis.filter(api =>
        filterBySearch(api.API) || filterBySearch(api.Description)
      );
    }

    const categorized = apis.reduce(
      (acc, api) => {
        if(acc[api.Category]) {
          acc[api.Category].push(api);
        } else {
          acc[api.Category] = [api];
        }

        return acc;
      },
      {}
    );

    return categorized;
  }
);
