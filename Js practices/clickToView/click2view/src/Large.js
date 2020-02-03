import React from "react";

class Large extends React.Component {
  constructor() {
    super();
    this.node = React.createRef();
  }

  componentWillMount = (e) => {
    document.addEventListener("mousedown", this.outsideClicked);
  }

  outsideClicked = (e) => {
    if (this.node.current.contains(e.target)) {  
      return;
    }
    document.querySelector(".background").style.display = "none";
    this.props.handleUnclicked();
    document.removeEventListener("mousedown", this.outsideClicked);
  }

  render() {

    const { imagesData, index, currentIndex } = this.props;

    return(
      <div className="image-clicked" ref={this.node} >
        {this.props.currentIndex !== 0 &&   
          <div className="direction-left">
            <img onClick={this.props.toTheLeft} src="dirl.png" alt="" />
          </div>
        }
        <div className="image-center">   
          <img src={imagesData[currentIndex].large} alt="" />
        </div>
        {this.props.currentIndex !== 8 &&
          <div className="direction-right">
            <img onClick={this.props.toTheRight} src="dirr.png" alt="" />
          </div>
        }
      </div>
    );
  }
}

export default Large;