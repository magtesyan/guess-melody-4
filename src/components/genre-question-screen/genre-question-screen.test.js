import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

const question = {
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
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create((<GenreQuestionScreen
      question={question}
      onAnswer={() => {}}
    />), {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
