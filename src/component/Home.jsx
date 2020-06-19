import React, { Component } from "react";
import Axios from "axios";

class Home extends Component {
  state = {
    dogs: [],
  };
  componentDidMount() {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response.data.message);
      this.setState({ dogs: response.data.message });
    });
  }
  render() {
    return (
      <div>
        <h1>Random Dogs</h1>
        <img src={this.state.dogs} alt={this.state.name} />
      </div>
    );
  }
}

export default Home;
