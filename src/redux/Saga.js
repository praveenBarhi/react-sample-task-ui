import {all} from 'redux-saga/effects';
import {SampleSaga} from './sample';

export default function* Saga() {
	yield all([
		SampleSaga()
	]);
}
