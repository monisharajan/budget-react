import { createStore, combineReducers } from 'redux';
import { reducer } from '../reducers/entries.reducers';

const configStore = () => {
  return createStore(combineReducers({
    entries: reducer
  }));
};

export default configStore;
