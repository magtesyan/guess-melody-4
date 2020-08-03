import Artist from "./artist";
import * as renderer from "react-test-renderer";
import * as React from "react";
import {GameType, QuestionArtist} from "../../types";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const answer = [
  {
    picture: `${AVATAR_URL}/11`,
    artist: `John Snow`,
  }, {
    picture: `${AVATAR_URL}/12`,
    artist: `Jack Daniels`,
  }, {
    picture: `${AVATAR_URL}/13`,
    artist: `Jim Beam`,
  }
];

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

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<Artist
      index = {1}
      key = {2}
      answer = {answer[0]}
      question = {question}
      onAnswer = {jest.fn()}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
