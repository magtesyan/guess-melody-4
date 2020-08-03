import GenreQuestionScreen from "./genre-question-screen";
import * as renderer from "react-test-renderer";
import * as React from "react";
import {GameType, QuestionGenre} from "../../types";

const question: QuestionGenre = {
  type: GameType.GENRE,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const userAnswers = new Array(4).fill(false);

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create((<GenreQuestionScreen
      question={question}
      userAnswers={userAnswers}
      renderPlayer={jest.fn()}
      handleSubmitForm={jest.fn()}
      handleAnswerSubmit={jest.fn()}
      handlePlayButtonClick={jest.fn()}
    />), {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
