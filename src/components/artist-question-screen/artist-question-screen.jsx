import Artist from "../artist/artist.jsx";
import {GameType} from "../../const.js";
import PropTypes from "prop-types";
import React from "react";

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

export default ArtistQuestionScreen;
