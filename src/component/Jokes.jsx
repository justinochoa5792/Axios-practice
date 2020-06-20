import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Jokes extends Component {
  state = {
    jokes: [],
  };
  componentDidMount() {
    axios
      .get("https://official-joke-api.appspot.com/random_ten")
      .then((response) => {
        console.log(response.data);
        this.setState({ jokes: response.data });
      });
  }
  showJokes = () => {
    return this.state.jokes.map((eachJoke) => {
      return (
        <li>
          {eachJoke.setup}
          {eachJoke.punchline}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Jokes</h1>
        {this.showJokes()}
      </div>
    );
  }
}

export default Jokes;
