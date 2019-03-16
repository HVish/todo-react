import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CircularProgress = props => {
  let canvasEl;
  useEffect(() => {
    // const ctx = canvasEl.canvas.getContext('2d');
    // TODO: add logic to paint progress bar
  });

  return (
    <div className="circular-progress" style={{ background: props.background }}>
      <canvas ref={node => (canvasEl = node)} width={props.width} height={props.height} />
    </div>
  );
};

CircularProgress.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
};

export default CircularProgress;
