import { createStore } from 'redux';
import appReducer from '../reducers/app.reducer';

export default createStore(appReducer);
