import React from 'react';
import './Popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="inner">
          <div className="text">
          <span>this is a pop up!</span>
          <button onClick={this.props.clickToClose}>Close Me!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;