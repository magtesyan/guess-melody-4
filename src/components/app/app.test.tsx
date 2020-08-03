import configureStore from "redux-mock-store";
import * as React from "react";
import {Provider} from "react-redux";
import * as renderer from "react-test-renderer";

import {App} from "./app";
import {AuthorizationStatus} from "../../redux/user/user";
import {GameType, QuestionArtist, QuestionGenre} from "../../types";
import NameSpace from "../../redux/name-space";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const mockStore = configureStore([]);

const questions: (QuestionArtist|QuestionGenre)[] = [
  {
    type: GameType.GENRE,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  },
  {
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
  }
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={jest.fn()}
              maxMistakes={3}
              mistakes={0}
              questions = {questions}
              onUserAnswer={jest.fn()}
              onWelcomeButtonClick={jest.fn()}
              step={-1}
              resetGame={jest.fn()}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={jest.fn()}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={jest.fn()}
              onWelcomeButtonClick={jest.fn()}
              step={0}
              resetGame={jest.fn()}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={jest.fn()}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={jest.fn()}
              onWelcomeButtonClick={jest.fn()}
              step={1}
              resetGame={jest.fn()}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GameOverScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={jest.fn()}
              maxMistakes={3}
              mistakes={3}
              questions={questions}
              onUserAnswer={jest.fn()}
              onWelcomeButtonClick={jest.fn()}
              step={1}
              resetGame={jest.fn()}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render WinScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.AUTH}
              login={jest.fn()}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={jest.fn()}
              onWelcomeButtonClick={jest.fn()}
              step={3}
              resetGame={jest.fn()}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render AuthScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    const tree = renderer
     .create(
         <Provider store={store}>
           <App
             authorizationStatus={AuthorizationStatus.NO_AUTH}
             login={jest.fn()}
             maxMistakes={3}
             mistakes={0}
             questions={questions}
             onUserAnswer={jest.fn()}
             onWelcomeButtonClick={jest.fn()}
             resetGame={jest.fn()}
             step={3}
           />
         </Provider>, {
           createNodeMock: () => {
             return {};
           }
         })
     .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
