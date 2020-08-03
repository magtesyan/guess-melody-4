import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import GenreQuestionScreen from "./genre-question-screen";
import * as React from "react";
import {GameType, QuestionGenre} from "../../types";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`When user answers genre question form is not sent`, () => {
  const handleSubmitForm = jest.fn();

  const genreQuestion = mount(
      <GenreQuestionScreen
        question={question}
        userAnswers={userAnswers}
        renderPlayer={jest.fn()}
        handleSubmitForm={handleSubmitForm}
        handleAnswerSubmit={jest.fn()}
        handlePlayButtonClick={jest.fn()}
      />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const handleSubmitForm = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const genreQuestion = mount(
      <GenreQuestionScreen
        question={question}
        renderPlayer={jest.fn()}
        userAnswers={userAnswer}
        handleSubmitForm={handleSubmitForm}
        handleAnswerSubmit={jest.fn()}
        handlePlayButtonClick={jest.fn()}
      />);

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(handleSubmitForm).toHaveBeenCalledTimes(1);

  expect(handleSubmitForm.mock.calls[0][0]).toEqual(void 0);
  expect(
      genreQuestion.find(`input`).map((inputBox) => inputBox.prop(`checked`))
  ).toEqual(userAnswer);
});
