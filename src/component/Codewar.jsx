import React, { Component } from "react";
import Axios from "axios";

class Codewar extends Component {
  state = {
    kata: [],
  };
  componentDidMount() {
    Axios.get("https://www.codewars.com/api/v1/code-challenges/:id_or_slug", {
      header: {
        Authorization: "VepJtQ4Pp56oReGJucvb",
      },
    }).then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <h1>Codewars!</h1>
      </div>
    );
  }
}

export default Codewar;
