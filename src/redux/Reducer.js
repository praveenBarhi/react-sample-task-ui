import {combineReducers} from 'redux';
import sample from './sample';

const appReducer = combineReducers({
	sample: sample
});

export default (state, action) => {
	return appReducer(state, action);
};
