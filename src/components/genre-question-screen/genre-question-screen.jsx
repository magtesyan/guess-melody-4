import {GameType} from "../../const.js";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import RenderTrack from "../render-track/render-track.jsx";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: new Array(4).fill(false),
    };
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(index, userAnswers, value) {
    this.setState({
      answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)],
    });
  }

  render() {
    const {onAnswer, question} = this.props;
    const {answers, genre} = question;
    const {answers: userAnswers} = this.state;
    const tracks = answers.map((answer, index) =>
      <RenderTrack
        src = {answer.src}
        index = {index}
        key = {answer.id}
        userAnswers = {userAnswers}
        handleAnswerSubmit = {this.handleAnswerSubmit}
      />
    );
    const handleSubmitForm = (evt) => {
      evt.preventDefault();
      onAnswer(question, this.state.answers);
    };

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>
        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={handleSubmitForm}
          >
            {tracks}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
