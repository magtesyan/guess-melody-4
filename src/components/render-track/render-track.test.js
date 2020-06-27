import React from "react";
import RenderTrack from "./render-track.jsx";
import renderer from "react-test-renderer";

const userAnswers = [false, true, false, false];
const answer = {
  id: `12345`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `blues`,
};
const index = 1;

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const handleAnswerSubmit = jest.fn();
  const tree = renderer
    .create(<RenderTrack
      src = {answer.src}
      index = {index}
      key = {answer.id}
      userAnswers = {userAnswers}
      handleAnswerSubmit = {handleAnswerSubmit}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
