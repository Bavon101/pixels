import React from 'react';
import PropTypes from 'prop-types';
import './details_card.css';

export default function DetailsCard(props) {
  const { title, value, light } = props;
  return (
    <div className="card" style={{ backgroundColor: light ? '#4167AF' : '#3F62A6' }}>
      <h3>
        {title}
      </h3>
      <h4>
        {value}
      </h4>
    </div>
  );
}
DetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};
