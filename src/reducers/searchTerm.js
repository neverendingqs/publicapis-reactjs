import { SEARCH_UPDATE } from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case SEARCH_UPDATE:
      return action.payload;
    default:
      return state;
  }
};
