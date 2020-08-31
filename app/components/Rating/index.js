/**
 *
 * Rating
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './style.css';

function renderHighlightStars(count) {
  const starsHighlight = [];
  for (let i = 1; i <= count; i += 1) {
    starsHighlight.push(<div className="clip-star" />);
  }
  return starsHighlight;
}

function renderStars(count) {
  const stars = [];
  for (let i = 1; i <= count; i += 1) {
    stars.push(<div className="star" />);
  }
  return stars;
}

function Rating({ ratingStars }) {
  return (
    <div className="stars-container">
      {renderHighlightStars(ratingStars)}
      {renderStars(5 - ratingStars)}
    </div>
  );
}

Rating.propTypes = {
  ratingStars: PropTypes.number,
};

export default Rating;
