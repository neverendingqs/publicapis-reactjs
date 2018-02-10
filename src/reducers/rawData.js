import { APP_LOAD } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return action.payload;
    default:
      return state;
  }
};
