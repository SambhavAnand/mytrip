import {handleActions} from 'redux-actions';

import {
  setUberPrices,
  setLyftPrices,
  setTaxiPrice
} from '../actions/setPricesActions';

const initialState = {
  uberPrices: [],
  lyftPrices: [],
  taxiPrice: []
};


export default handleActions({
  [setUberPrices]: (state, action) => {
    let uberPrices = action.payload;
    uberPrices.sort((priceA, priceB) => priceA.priceLow-priceB.priceLow);
    return ({
    ...state,
    uberPrices:uberPrices
  })},
  [setLyftPrices]: (state, action) => {
    let lyftPrices = action.payload;
    lyftPrices.sort((priceA, priceB) => priceA.priceLow-priceB.priceLow);
    return ({
    ...state,
    lyftPrices: lyftPrices
  })},
  [setTaxiPrice]: (state, action) => {
    let taxiPrice = action.payload.toFixed(2);
    return ({
    ...state,
    taxiPrice: taxiPrice
  })}
}, initialState);
