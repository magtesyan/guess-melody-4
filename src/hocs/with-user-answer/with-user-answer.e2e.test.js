import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={mock.question}
    onAnswer={jest.fn()}
  />);

  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().handleAnswerSubmit(0, wrapper.props().userAnswers, true);
  expect(wrapper.props().userAnswers).toEqual([true, false, false, false]);

  wrapper.props().handleAnswerSubmit(0, wrapper.props().userAnswers, false);
  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().handleAnswerSubmit(1, wrapper.props().userAnswers, true);
  expect(wrapper.props().userAnswers).toEqual([false, true, false, false]);
});
