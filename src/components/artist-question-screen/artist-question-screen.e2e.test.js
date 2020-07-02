import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import Enzyme, {mount} from "enzyme";
import React from "react";
import shortid from "shortid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: shortid.generate(),
      picture: `${AVATAR_URL}/11`,
      artist: `John Snow`,
    }, {
      id: shortid.generate(),
      picture: `${AVATAR_URL}/12`,
      artist: `Jack Daniels`,
    }, {
      id: shortid.generate(),
      picture: `${AVATAR_URL}/13`,
      artist: `Jim Beam`,
    }],
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    picture: `${AVATAR_URL}/11`,
    artist: `John Snow`,
  };

  const artistQuestion = mount(
      <ArtistQuestionScreen
        onAnswer={onAnswer}
        question={question}
        renderPlayer={() => {}}
      />);

  const answerInputs = artistQuestion.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
