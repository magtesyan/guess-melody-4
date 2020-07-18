import configureStore from "redux-mock-store";
import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import shortid from "shortid";

import {App} from "./app.jsx";
import {AuthorizationStatus} from "../../redux/reducer/user/user.js";
import NameSpace from "../../redux/reducer/name-space.js";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const mockStore = configureStore([]);

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

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0,
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
});
