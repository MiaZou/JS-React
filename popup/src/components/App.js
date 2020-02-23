import React from 'react';
import Popup from './Popup';

class App extends React.Component {
  state = { clicked: false };

  clickToClose = () => {
    this.setState({ clicked: false });
    console.log("clicked!");
  }

  render() {
    console.log("I am rendering!");
    console.log(this.state.clicked);

    return (
      <div>
        Open this popup!
        <button onClick={() => this.setState({ clicked: true })}>Open!</button>
        {this.state.clicked &&
          <Popup 
            clickToClose={this.clickToClose}
          />
        }   
      </div>
    );
  }
}

export default App;