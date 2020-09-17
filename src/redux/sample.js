import {put, takeEvery } from 'redux-saga/effects';
import { getSampleData } from '../utils/sample';

//action-type
const START_APP = 'START_APP';
const START_APP_SUCCESS = 'START_APP_SUCCESS';
const START_APP_FAIL = 'START_APP_FAIL';

// action creators
export const startApp = () => ({
	type: START_APP
});

const initialState = {
	isSpinner: true,
	sampleData: [],
	message:''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case START_APP:
			return {
				...state,
				isSpinner: true,
				message: ''
			};
		case START_APP_SUCCESS:
			return {
				...state,
				isSpinner: false,
				sampleData: action.payload
			};
		case START_APP_FAIL:
			return {
				...state,
				isSpinner: false,
				message: action.message
			};
		default:
			return state;
	}
};


function* _startApp() {
	try {
		yield put({ type: START_APP_SUCCESS, payload: getSampleData() });

	} catch (e) {
		yield put({ type: START_APP_FAIL, message: e.message });
	}
}

export const SampleSaga = function* () {
	yield takeEvery(START_APP, _startApp);
};