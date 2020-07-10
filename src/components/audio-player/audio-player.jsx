import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";


class AudioPlayer extends PureComponent {
  render() {
    const {onPlayButtonClick, isLoading, isPlaying, children} = this.props;
    const buttonClass = `track__button track__button--${isPlaying ? `pause` : `play`}`;

    return (
      <Fragment>
        <button
          className={buttonClass}
          type="button"
          onClick={onPlayButtonClick}
          disabled={isLoading}
        />
        <div className="track__status">
          {children}
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default AudioPlayer;
