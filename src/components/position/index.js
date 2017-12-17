import React from 'react';
import PropTypes from 'prop-types';

const Position = ({
  item
}) => (
  <div>
    <h2>{ item.company }</h2>
    <h3>{ item.title }</h3>
    <h4>{ item.dates }</h4>
    <p>{ item.description }</p>
  </div>
);

Position.propTypes = {
  item: PropTypes.object
}

export default Position;

