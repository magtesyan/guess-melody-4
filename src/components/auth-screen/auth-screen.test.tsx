import * as React from "react";
import * as renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onReplayButtonClick={jest.fn()}
        onSubmit={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
