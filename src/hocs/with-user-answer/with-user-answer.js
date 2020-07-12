import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {GameType} from "../../const.js";

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(4).fill(false),
      };
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    }

    handleAnswerSubmit(index, userAnswers, value) {
      this.setState({
        answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)],
      });
    }

    handlePlayButtonClick(index, activePlayer) {
      this.setState({
        activePlayer: activePlayer === index ? -1 : index,
      });
    }

    handleSubmitForm() {
      const {question, onAnswer} = this.props;
      onAnswer(question, this.state.answers);
    }

    render() {
      const {answers: userAnswers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={userAnswers}
          handleSubmitForm={this.handleSubmitForm}
          handleAnswerSubmit={this.handleAnswerSubmit}
          handlePlayButtonClick={this.handlePlayButtonClick}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })).isRequired,
      genre: PropTypes.string.isRequired,
      type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
