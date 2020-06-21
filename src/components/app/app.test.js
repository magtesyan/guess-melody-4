import App from "./app.jsx";
import React from "react";
import renderer from "react-test-renderer";
import shortid from "shortid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questions = [
  {
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
  },
  {
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
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions = {questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
