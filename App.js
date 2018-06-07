/*Library Imports*/

import React from 'react';
import {Provider} from 'react-redux';
/*Custom Imports*/
import {RootNavigator} from './src/utilities/routes';
import configureStore from './src/redux/store/configureStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>

    );
  }
}
