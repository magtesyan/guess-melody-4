import PropTypes from "prop-types";
import React from "react";

const WinScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick} = props;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={onReplayButtonClick}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
};

export default WinScreen;
