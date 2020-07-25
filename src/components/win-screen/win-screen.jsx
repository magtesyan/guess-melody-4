import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const WinScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick} = props;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <Link
        className="replay"
        to={AppRoute.ROOT}
        onClick={onReplayButtonClick}
      >
        Попробовать ещё раз
      </Link>
    </section>
  );
};

WinScreen.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
};

export default WinScreen;
