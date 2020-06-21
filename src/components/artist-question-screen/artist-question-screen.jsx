import {GameType} from "../../const.js";
import PropTypes from "prop-types";
import React from "react";

const Artist = (props) => {
  const {artist, picture, index, answer, question, onAnswer} = props;

  return (
    <div className="artist">
      <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${index}`} id={`answer-${index}`}
        onChange={(evt) => {
          evt.preventDefault();
          onAnswer(question, answer);
        }}
      />
      <label className="artist__name" htmlFor={`answer-${index}`}>
        <img className="artist__picture" src={picture} alt={artist} />
        {artist}
      </label>
    </div>
  );
};

const ArtistQuestionScreen = (props) => {
  const {onAnswer, question} = props;
  const {answers, song} = question;
  const artists = answers.map((answer, index) =>
    <Artist
      picture = {answer.picture}
      artist = {answer.artist}
      index = {index}
      key = {answer.id}
      answer = {answer}
      question = {question}
      onAnswer = {onAnswer}
    />
  );

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={song.src}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {artists}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

Artist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  answer: PropTypes.object.isRequired,
};

export default ArtistQuestionScreen;
