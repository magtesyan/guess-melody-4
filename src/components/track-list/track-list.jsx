import PropTypes from "prop-types";
import React from "react";

const TrackList = (props) => {
  const {src, index, userAnswers, handleAnswerSubmit, renderPlayer} = props;

  const handleChangeAnswer = (evt) => {
    const value = evt.target.checked;
    handleAnswerSubmit(index, userAnswers, value);
  };


  return (
    <div className="track">
      {renderPlayer(src, index)}
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

TrackList.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default TrackList;
