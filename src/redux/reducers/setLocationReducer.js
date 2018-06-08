import {handleActions} from 'redux-actions';

import {
  setOriginLocation,
  setDestinationLocation,
} from '../actions/setLocationActions';

const initialState = {
  originLocation: {latitude: 40.7830603, longitude: -73.9712488, value: 'Manhattan'},
  destinationLocation: null,

};

export default handleActions({
  [setOriginLocation]: (state, action) => ({
    ...state,
    originLocation:action.payload
  }),
  [setDestinationLocation]: (state, action) => ({
    ...state,
    destinationLocation: action.payload
  })
}, initialState);
