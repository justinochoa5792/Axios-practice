import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to="/quiz">Quiz |</Link>
        <Link to="/jokes"> Jokes |</Link>
        <Link to="/codewar"> CodeWar |</Link>
        <h1>Random Dogs</h1>
        <img src={this.state.dogs} alt={this.state.name} />
      </div>
    );
  }
}

export default Home;
