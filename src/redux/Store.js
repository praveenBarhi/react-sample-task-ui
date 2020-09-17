import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Saga from './Saga';
import Reducer from './Reducer';
import { createLogger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
	duration : true
});

const middleWare = window.__REDUX_DEVTOOLS_EXTENSION__
	? compose(
			applyMiddleware(sagaMiddleware,logger),
			window.__REDUX_DEVTOOLS_EXTENSION__(),
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  )
	: applyMiddleware(sagaMiddleware,logger);

// Create data store
const Store = createStore(Reducer, middleWare);
sagaMiddleware.run(Saga);

export default Store;
