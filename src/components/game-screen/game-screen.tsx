import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as React from "react";

import {ActionCreator} from "../../redux/game/game";
import {AppRoute} from "../../const";
import {GameType} from "../../types";
import {getMistakes} from "../../redux/game/selectors";
import Mistakes from "../mistakes/mistakes";

interface Props {
  type: GameType;
  children: React.ReactNode;
  mistakes: number;
  goToWelcome: () => void;
};

const GameScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {type, children, mistakes, goToWelcome} = props;

  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <Link
          className="game__back"
          to={AppRoute.ROOT}
          onClick={goToWelcome}
        >
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <Mistakes
            count={mistakes}
          />
        </div>
      </header>

      {children}
    </section>
  );
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  goToWelcome() {
    dispatch(ActionCreator.goToWelcome());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
