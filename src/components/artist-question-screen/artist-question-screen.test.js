import ArtistQuestionScreen from "./artist-question-screen.jsx";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const question = {
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
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={question}
      onAnswer={() => {}}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
