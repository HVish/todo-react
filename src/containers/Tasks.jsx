import React from 'react';

const Tasks = props => (
  <p>
    Tasks component works
    <br />
    Status: {props.status}
  </p>
);

export default status => props => <Tasks {...props} status={status} />;
