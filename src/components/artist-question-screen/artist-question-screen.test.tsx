import ArtistQuestionScreen from "./artist-question-screen";
import {GameType, QuestionArtist} from "../../types";
import * as renderer from "react-test-renderer";
import * as React from "react";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

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
    .create(<ArtistQuestionScreen
      question={question}
      onAnswer={jest.fn()}
      renderPlayer={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
