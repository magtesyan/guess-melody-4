import App from "./app.jsx";
import renderer from "react-test-renderer";
import React from "react";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
