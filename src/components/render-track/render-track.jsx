import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

const Track = (props) => {
  const {src, index, userAnswers, handleAnswerSubmit} = props;

  const handleChangeAnswer = (evt) => {
    const value = evt.target.checked;
    handleAnswerSubmit(index, userAnswers, value);
  };

  return (
    <div className="track" key = {shortid.generate()}>
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

const RenderTrack = (props) => {
  const {answers, userAnswers, handleAnswerSubmit} = props;

  const tracks = answers.map((answer, index) => {
    return (
      <Track
        key={shortid.generate()}
        index={index}
        src={answer.src}
        handleAnswerSubmit={handleAnswerSubmit}
        userAnswers={userAnswers}
      />
    );
  });

  return (
    <React.Fragment>
      {tracks}
    </React.Fragment>
  );
};

RenderTrack.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
};

export default RenderTrack;
