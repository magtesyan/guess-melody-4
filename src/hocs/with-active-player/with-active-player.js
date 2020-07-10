import React, {PureComponent} from 'react';
import Player from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio.js";

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: -1,
      };
    }

    render() {
      const {activePlayerId} = this.state;
      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          const handlePlayButtonClick = () => this.setState({
            activePlayerId: activePlayerId === id ? -1 : id
          });
          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={handlePlayButtonClick}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
