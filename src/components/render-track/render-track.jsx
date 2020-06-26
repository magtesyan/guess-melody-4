import PropTypes from "prop-types";
import React from "react";

const RenderTrack = (props) => {
  const {src, index, userAnswers, handleAnswerSubmit} = props;

  const handleChangeAnswer = (evt) => {
    const value = evt.target.checked;
    handleAnswerSubmit(index, userAnswers, value);
  };

  return (
    <div className="track">
      <button className="track__button track__button--play" type="button"></button>
      <div className="track__status">
        <audio src={src}></audio>
      </div>
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`}
          checked={userAnswers[index]}
          onChange={handleChangeAnswer}
        />
        <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
      </div>
    </div>
  );
};

RenderTrack.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
};

export default RenderTrack;
