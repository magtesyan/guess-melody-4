import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import React from "react";
import shortid from "shortid";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();

  const genreQuestion = mount(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={question}
      />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const genreQuestion = mount(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={question}
      />);

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(
      genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
