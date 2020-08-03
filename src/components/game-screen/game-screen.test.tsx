import * as renderer from "react-test-renderer";
import * as React from "react";
import {Router} from "react-router-dom";

import {GameScreen} from "./game-screen";
import {GameType} from "../../types";
import history from "../../history";

const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.ARTIST}
            mistakes={2}
            goToWelcome={jest.fn()}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.GENRE}
            mistakes={2}
            goToWelcome={jest.fn()}
          >
            {children}
          </GameScreen>
        </Router>
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
