import * as React from "react";

import {GameType, QuestionGenre, AnswerGenre} from "../../types";
import TrackList from "../track-list/track-list";

interface Props {
  handleSubmitForm: () => void;
  handleAnswerSubmit: () => void;
  handlePlayButtonClick: () => void;
  question: QuestionGenre
  renderPlayer: (src: string, id: number) => React.ReactNode;
  userAnswers: boolean[];
};

class GenreQuestionScreen extends React.PureComponent<Props, {}> {
  render() {
    const {question, renderPlayer, handleSubmitForm, userAnswers, handleAnswerSubmit, handlePlayButtonClick} = this.props;
    const {answers, genre} = question;
    const tracks = answers.map((answer, index) =>
      <TrackList
        src = {answer.src}
        index = {index}
        key = {`${index}${answer.src}`}
        userAnswers = {userAnswers}
        handleAnswerSubmit = {handleAnswerSubmit}
        handlePlayButtonClick = {handlePlayButtonClick}
        renderPlayer = {renderPlayer}
      />
    );

    const callOnSubmitForm = (evt) => {
      evt.preventDefault();
      handleSubmitForm();
    };

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={callOnSubmitForm}
        >
          {tracks}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

export default GenreQuestionScreen;
