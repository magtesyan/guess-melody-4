import PropTypes from "prop-types";
import React from "react";

const Artist = (props) => {
  const {index, answer, question, onAnswer} = props;
  const handleAnswerChoice = (evt) => {
    evt.preventDefault();
    onAnswer(question, answer);
  };

  return (
    <div className="artist">
      <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${index}`} id={`answer-${index}`}
        onChange={handleAnswerChoice}
      />
      <label className="artist__name" htmlFor={`answer-${index}`}>
        <img className="artist__picture" src={answer.picture} alt={answer.artist} />
        {answer.artist}
      </label>
    </div>
  );
};

Artist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })),
  }).isRequired,
  answer: PropTypes.object.isRequired,
};

export default Artist;
