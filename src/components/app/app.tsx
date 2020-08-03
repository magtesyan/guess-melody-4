import {connect} from "react-redux";
import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";


import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../redux/user/user";
import {ActionCreator} from "../../redux/game/game";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import GameScreen from "../game-screen/game-screen";
import {GameType, QuestionGenre, QuestionArtist} from "../../types";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import {getAuthorizationStatus} from "../../redux/user/selectors";
import {getQuestions} from "../../redux/data/selectors";
import {getStep, getMistakes, getMaxMistakes} from "../../redux/game/selectors";
import history from "../../history";
import {Operation as UserOperation} from "../../redux/user/user";
import PrivateRoute from "../private-route/private-route";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import WinScreen from "../win-screen/win-screen";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";

interface Props {
  authorizationStatus: string;
  login: () => void;
  maxMistakes: number;
  mistakes: number;
  questions: Question[];
  onUserAnswer: () => void;
  onWelcomeButtonClick: () => void;
  resetGame: () => void;
  step: number;
};

type Question = QuestionArtist | QuestionGenre;

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends React.PureComponent<Props, {}> {
  _renderGameScreen() {
    const {maxMistakes, questions, step, onUserAnswer, onWelcomeButtonClick, mistakes, authorizationStatus} = this.props;

    const question = questions[step];

    if (step === -1) {
      return <WelcomeScreen
        maxMistakes={maxMistakes}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />;
    }

    if (mistakes >= maxMistakes) {
      return history.push(AppRoute.LOSE);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return history.push(AppRoute.RESULT);
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return history.push(AppRoute.LOGIN);
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        default:
          break;
      }
    }

    return null;
  }

  render() {
    const {questions, mistakes, resetGame, login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderGameScreen()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <AuthScreen
              onReplayButtonClick={resetGame}
              onSubmit={login}
            />
          </Route>
          <Route exact path={AppRoute.LOSE}>
            <GameOverScreen
              onReplayButtonClick={resetGame}
            />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.RESULT}
            render={() => {
              return (
                <WinScreen
                  questionsCount={questions.length}
                  mistakesCount={mistakes}
                  onReplayButtonClick={resetGame}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
