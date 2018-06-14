import {handleActions} from 'redux-actions';

import {
  setUberPrices,
  setLyftPrices,
  setJunoPrices,
  setTaxiPrice
} from '../actions/setPricesActions';

const initialState = {
  uberPrices: [],
  lyftPrices: [],
  taxiPrice: [],
  junoPrices: []
};


export default handleActions({
  [setUberPrices]: (state, action) => {
    let uberPrices = action.payload;
    uberPrices?uberPrices.sort((priceA, priceB) => priceA.priceLow - priceB.priceLow):uberPrices;
    return ({
    ...state,
    uberPrices:uberPrices
  })},
  [setLyftPrices]: (state, action) => {
    let lyftPrices = action.payload;
    lyftPrices?lyftPrices.sort((priceA, priceB) => priceA.priceLow - priceB.priceLow):lyftPrices;
    return ({
    ...state,
    lyftPrices: lyftPrices
  })},
  [setJunoPrices]: (state, action) => {
    let junoPrices = action.payload;
    junoPrices?junoPrices.sort((priceA, priceB) => priceA.priceLow - priceB.priceLow):junoPrices;
    return ({
      ...state,
      junoPrices: junoPrices
  })},
  [setTaxiPrice]: (state, action) => {
    let taxiPrice = action.payload?action.payload.toFixed(2):action.payload;
    return ({
    ...state,
    taxiPrice: taxiPrice
  })}
}, initialState);
