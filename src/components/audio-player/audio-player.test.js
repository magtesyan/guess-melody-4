import React from "react";
import AudioPlayer from "./audio-player.jsx";
import renderer from "react-test-renderer";


const song = {
  artist: `Jim Beam`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      src={song.src}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
