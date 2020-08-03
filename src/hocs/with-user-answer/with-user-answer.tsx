import * as React from "react";
import {Subtract} from "utility-types";
import {QuestionGenre} from "../../types";

interface State {
  answers: Answer;
  activePlayer?: number;
}

interface Props {
  question: QuestionGenre;
  onAnswer: (question: QuestionGenre, answers: Answer) => void;
}

interface InjectedProps {
  userAnswer: Answer;
  onChange: (answerIndex: number) => void;
  onAnswer: () => void;
}

type Answer = boolean[];

const withUserAnswer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithUserAnswer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(4).fill(false),
      };
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    }

    handleAnswerSubmit(index, userAnswers, value) {
      this.setState({
        answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)],
      });
    }

    handlePlayButtonClick(index, activePlayer) {
      this.setState({
        activePlayer: activePlayer === index ? -1 : index,
      });
    }

    handleSubmitForm() {
      const {question, onAnswer} = this.props;
      onAnswer(question, this.state.answers);
    }

    render() {
      const {answers: userAnswers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={userAnswers}
          handleSubmitForm={this.handleSubmitForm}
          handleAnswerSubmit={this.handleAnswerSubmit}
          handlePlayButtonClick={this.handlePlayButtonClick}
        />
      );
    }
  }

  return WithUserAnswer;
};

export default withUserAnswer;
