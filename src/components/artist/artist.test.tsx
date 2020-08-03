import Artist from "./artist";
import * as renderer from "react-test-renderer";
import * as React from "react";
import shortid from "shortid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const answer = [
  {
    id: shortid.generate(),
    index: 1,
    picture: `${AVATAR_URL}/11`,
    artist: `John Snow`,
  }, {
    id: shortid.generate(),
    index: 2,
    picture: `${AVATAR_URL}/12`,
    artist: `Jack Daniels`,
  }, {
    id: shortid.generate(),
    index: 3,
    picture: `${AVATAR_URL}/13`,
    artist: `Jim Beam`,
  }
];

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  }
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<Artist
      index = {answer[0].index}
      key = {answer[0].id}
      answer = {answer[0]}
      question = {question}
      onAnswer = {jest.fn()}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
