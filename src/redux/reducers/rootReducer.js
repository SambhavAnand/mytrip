import {combineReducers} from 'redux';
import setLocationReducer from './setLocationReducer';
import setPricesReducer from './setPricesReducer';

const rootReducer = combineReducers({
    location: setLocationReducer,
    prices: setPricesReducer
});

export default rootReducer;
