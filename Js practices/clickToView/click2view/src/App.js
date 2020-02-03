import React from "react";
import "./App.css";
import EachImg from "./EachImg.js";

const imagesData = [{
  small: "s1.jpg", large: "big1.jpg"
},
{
  small: "s2.jpg", large: "big2.jpg"
},
{
  small: "s3.jpg", large: "big3.jpg"
},
{
  small: "s4.jpg", large: "big4.jpg"
},
{
  small: "s5.jpg", large: "big5.jpg"
},
{
  small: "s6.jpg", large: "big6.jpg"
},
{
  small: "s7.jpg", large: "big7.jpg"
},
{
  small: "s8.jpg", large: "big8.jpg"
},
{
  small: "s9.jpg", large: "big9.jpg"
}];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imagesData: [],
    };
  }

  componentDidMount() {
    this.setState({ imagesData: imagesData });
  }

  render() {

    return (
      <div className="App">
        <div className="img-container">
          {this.state.imagesData.map((image, index, imagesData) => 
            <EachImg
              key={index}
              index={index}
              image={image}
              imagesData={imagesData}
            />
          )}
        </div>
        <div className="background" >
        </div>
      </div>

    );
  }
}

export default App;