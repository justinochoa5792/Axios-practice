import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Quiz extends Component {
  state = {
    quiz: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      )
      .then((response) => {
        console.log(response.data.results);
        this.setState({ quiz: response.data.results });
      });
  }
  showQuiz = () => {
    return this.state.quiz.map((eachQuiz) => {
      return (
        <li>
          {eachQuiz.question}
          <button>{eachQuiz.incorrect_answers[0]}</button>
          <button>{eachQuiz.incorrect_answers[1]}</button>
          <button>{eachQuiz.incorrect_answers[2]}</button>
          <button>{eachQuiz.correct_answer}</button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Quiz</h1>
        <Link to="/">Home</Link>
        {this.showQuiz()}
      </div>
    );
  }
}

export default Quiz;
