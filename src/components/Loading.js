import React from 'react';
import PropTypes from 'prop-types';

export default function Loading(props) {
  const { mini } = props;
  return (
    <div className={mini ? 'mini-loader' : 'loader'} />
  );
}

Loading.propTypes = {
  mini: PropTypes.bool.isRequired,
};
