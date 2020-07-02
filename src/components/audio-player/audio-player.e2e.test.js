import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const song = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`Should audio paused when clicked`, () => {
  const handlePlayButtonClick = jest.fn();

  const audioPlayer = shallow(
      <AudioPlayer
        src={song.src}
        isPlaying={true}
        onPlayButtonClick={handlePlayButtonClick}
      />,
      {disableLifecycleMethods: true}
  );

  const playerButton = audioPlayer.find(`.track__button`);

  playerButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(audioPlayer.exists(`.track__button--play`)).toBe(true);
  playerButton.simulate(`click`);
  expect(audioPlayer.exists(`.track__button--play`)).toBe(false);
  expect(audioPlayer.exists(`.track__button--pause`)).toBe(true);
});
