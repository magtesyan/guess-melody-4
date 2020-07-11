import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen.jsx";

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(<GameOverScreen
      onReplayButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
