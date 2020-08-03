import * as React from "react";

interface Props {
  isPlaying: boolean;
  isLoading: boolean;
  onPlayButtonClick: () => void;
  children: React.ReactNode;
};


class AudioPlayer extends React.PureComponent<Props, {}> {
  render() {
    const {onPlayButtonClick, isLoading, isPlaying, children} = this.props;
    const buttonClass = `track__button track__button--${isPlaying ? `pause` : `play`}`;

    return (
      <React.Fragment>
        <button
          className={buttonClass}
          type="button"
          onClick={onPlayButtonClick}
          disabled={isLoading}
        />
        <div className="track__status">
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default AudioPlayer;
