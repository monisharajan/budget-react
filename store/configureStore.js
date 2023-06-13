import { createStore, combineReducers } from 'redux';
import entriesReducers from '../reducers/entries.reducers';

const configStore = () => {
  return createStore(combineReducers({
    entries: entriesReducers
  }));
};

export default configStore;
