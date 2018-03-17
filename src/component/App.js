import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { FirstStore } from "../store/FirstStore";

const numberStore = new FirstStore(20);

class App extends Component {

    changeNumber = (number) => {
        FirstStore.setNumber(number)
    };

  render() {
    return (
      <div className="App">
        <h2>react-mobx-test</h2>
        <button onClick={this.changeNumber(numberStore.setNumber(numberStore.getNumber()+1))}>
            increaseButton
        </button>
        <button onClick={this.changeNumber(numberStore.setNumber(numberStore.getNumber()+1))}>
            decreaseButton
        </button>
         <div>
             <h3>Number</h3>
             <br/>
             <p>{numberStore.getNumber()}</p>
         </div>
      </div>
    );
  }
}

export default App;
