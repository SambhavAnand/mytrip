import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger'

export default function configureStore() {

    const middleWare = [];
    if(__DEV__===true) {
      middleWare.push(logger);
    }
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middleWare)
    );
}
