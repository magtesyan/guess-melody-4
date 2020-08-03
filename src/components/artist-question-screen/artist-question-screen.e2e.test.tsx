import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen";
import {configure, mount} from "enzyme";
import * as React from "react";
import {GameType, QuestionArtist} from "../../types";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

configure({
  adapter: new Adapter(),
});

const question: QuestionArtist = {
        type: GameType.ARTIST,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `${AVATAR_URL}/11`,
    artist: `John Snow`,
  }, {
    picture: `${AVATAR_URL}/12`,
    artist: `Jack Daniels`,
  }, {
    picture: `${AVATAR_URL}/13`,
    artist: `Jim Beam`,
  }],
};

const mockEvent = {
  preventDefault: jest.fn(),
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    picture: `${AVATAR_URL}/11`,
    artist: `John Snow`,
  };

  const artistQuestion = mount(
      <ArtistQuestionScreen
        onAnswer={onAnswer}
        question={question}
        renderPlayer={jest.fn()}
      />);

  const answerInputs = artistQuestion.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
