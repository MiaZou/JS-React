import React from "react";
import Large from "./Large.js";

class EachImg extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      currentIndex: -1,
      leftArrow: false,
      rightArrow: false
    };
  }

  imageClass = () => this.state.clicked? 'lg' : '';

  handleClicked = (index) => {
    let currentIndex = index;
    this.setState({ clicked: true, currentIndex: index }); 
    document.querySelector(".background").style.display = "block";
  }

  toTheLeft = () => {
    if (this.state.currentIndex !== 0) {
      let currentIndex = this.state.currentIndex - 1;
      this.setState({ currentIndex: currentIndex });
    }
  }

  toTheRight = () => {
    if (this.state.currentIndex !== 8) {
      let currentIndex = this.state.currentIndex + 1;
      this.setState({ currentIndex: currentIndex });     
    }

  }

  handleUnclicked = () => {
    this.setState({ clicked: false });
  }

  render() {

    return(
      <div className={this.imageClass()}>
        <div className="image-small" onClick={(e) => this.handleClicked(this.props.index)}>
          <img src={this.props.imagesData[this.props.index].small} alt="" />
        </div>
        {this.state.clicked &&
          <Large
            imagesData={this.props.imagesData}
            index={this.props.index}
            currentIndex={this.state.currentIndex}
            toTheLeft={this.toTheLeft}
            toTheRight={this.toTheRight}
            handleUnclicked={this.handleUnclicked}
          />
        }
      </div>
    );
  }
}

export default EachImg;