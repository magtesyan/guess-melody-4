import * as React from "react";
import * as renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Render Welcome Screen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      maxMistakes={3}
      onWelcomeButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
