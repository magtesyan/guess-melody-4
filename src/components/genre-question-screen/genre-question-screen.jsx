import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {GameType} from "../../const.js";
import TrackList from "../track-list/track-list.jsx";

class GenreQuestionScreen extends PureComponent {
  render() {
    const {question, renderPlayer, handleSubmitForm, userAnswers, handleAnswerSubmit, handlePlayButtonClick} = this.props;
    const {answers, genre} = question;
    const tracks = answers.map((answer, index) =>
      <TrackList
        src = {answer.src}
        index = {index}
        key = {answer.src}
        userAnswers = {userAnswers}
        handleAnswerSubmit = {handleAnswerSubmit}
        handlePlayButtonClick = {handlePlayButtonClick}
        renderPlayer = {renderPlayer}
      />
    );

    const callOnSubmitForm = (evt) => {
      evt.preventDefault();
      handleSubmitForm();
    };

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={callOnSubmitForm}
        >
          {tracks}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GenreQuestionScreen;
