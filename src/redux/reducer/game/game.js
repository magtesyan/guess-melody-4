import {GameType} from "../../../const.js";

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
      default:
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  resetGame: () => {
    return {
      type: ActionType.RESET,
      payload: null,
    };
  },
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((answer, index) => {
    return answer === (question.answers[index].genre === question.genre);
  });
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:

      return Object.assign({}, state, {
        step: state.step + action.payload,
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;
      if (mistakes >= state.maxMistakes) {
        return Object.assign({}, initialState);
      }

      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET:
      return Object.assign(initialState, {
        step: 0,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
