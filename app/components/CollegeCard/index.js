/**
 *
 * CollegeCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { get } from 'lodash';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import collegeImage from '../../assests/images/college.jpg';

import './style.css';

function CollegeCard({ collegeData }) {
  return (
    <div className="college-card">
      <div
        style={{
          backgroundImage: `url(${collegeImage})`,
          backgroundSize: 'cover',
        }}
        className="college-image"
      >
        <div className="image-overlay">
          <p>{get(collegeData, 'college_name')}</p>
        </div>
      </div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CollegeCard.propTypes = {
  collegeData: PropTypes.object,
};

export default CollegeCard;
