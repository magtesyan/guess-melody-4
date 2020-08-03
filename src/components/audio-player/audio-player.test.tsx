import * as React from "react";
import AudioPlayer from "./audio-player";
import * as renderer from "react-test-renderer";

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={false}
      isLoading={true}
      onPlayButtonClick={jest.fn()}
    >,
      <audio />
    </AudioPlayer>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
