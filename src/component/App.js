import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../store/RootStore';
import NumberComponent from './NumberComponent';

class App extends Component {

  render() {
    return (
      <Provider RootStore={new RootStore()}>
          <NumberComponent/>
      </Provider>
    );
  }
}

export default App;
