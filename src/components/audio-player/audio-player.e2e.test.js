import * as React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

configure({adapter: new Adapter()});

const src = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`Click by Play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(<AudioPlayer
    isLoading={false}
    isPlaying={false}
    onPlayButtonClick={handlePlayButtonClick}
    src={src}
  >
    <audio />
  </AudioPlayer>);

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
