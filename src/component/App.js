import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import FirstStore from '../store/FirstStore';
import NumberComponent from './NumberComponent';

class App extends Component {

  render() {
    return (
      <Provider FirstStore={FirstStore}>
          <NumberComponent/>
      </Provider>
    );
  }
}

export default App;
