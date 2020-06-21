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
        this.setState({ quiz: response.data.results });
      });
  }
  answerQuestion = (correct_answer, incorrect_answers) => {
    if (correct_answer !== incorrect_answers) {
      alert("Good job that is correct!");
    } else {
      alert("I am sorry that is incorrect!");
    }
  };
  showQuiz = () => {
    return this.state.quiz.map((eachQuiz) => {
      return (
        <li>
          {eachQuiz.question}
          <button onClick={() => this.answerQuestion()}>
            {eachQuiz.incorrect_answers[0]}
          </button>
          <button onClick={() => this.answerQuestion()}>
            {eachQuiz.incorrect_answers[1]}
          </button>
          <button onClick={() => this.answerQuestion()}>
            {eachQuiz.incorrect_answers[2]}
          </button>
          <button onClick={() => this.answerQuestion()}>
            {eachQuiz.correct_answer}
          </button>
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
