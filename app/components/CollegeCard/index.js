/**
 *
 * CollegeCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { get } from 'lodash';
import Rating from 'components/Rating';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import collegeImage from '../../assests/images/college.jpg';

import './style.css';

function CollegeCard({ collegeData }) {
  console.log(collegeData);
  return (
    <div className="college-card">
      {get(collegeData, 'promoted') ? (
        <div>
          <div className="flag" />
          <div className="promoted">Promoted</div>
        </div>
      ) : null}

      <div className="rating">
        <div className="ratings">
          <div className="ratings-bigger">{collegeData.rating}</div>
          <div> / 5</div>
        </div>
        <div>{collegeData.rating_remarks}</div>
      </div>
      <div
        style={{
          backgroundImage: `url(${collegeImage})`,
          backgroundSize: 'cover',
        }}
        className="college-image"
      >
        <div className="rankings-and-tags">
          <div className="tags-container">
            <div className="tags">{collegeData.tags[0]}</div>
            <div className="tags">{collegeData.tags[1]}</div>
          </div>
          <div className="ranking-comment">#{collegeData.ranking}</div>
        </div>
      </div>

      <p className="college-info">
        <div className="college-name-container">
          <div className="college-name-info">
            <div className="college-name">
              {get(collegeData, 'college_name')}
            </div>
            <Rating ratingStars={4} />
          </div>

          <div className="discount-container">
            <div className="original-fee">{collegeData.original_fees}</div>
            <div className="discount">{collegeData.discount}</div>
          </div>
        </div>
        <div className="college-name-container">
          <div className="location-container">
            <div className="location-1">{collegeData.nearest_place[0]}</div>
            <div className="separator">|</div>
            <div className="location-2">{collegeData.nearest_place[1]}</div>
          </div>
          <div className="college-fee">
            <div className="discount-fee">₹{collegeData.discounted_fees}</div>
            <div className="per-semester">
              <FormattedMessage {...messages.subHeading} />
            </div>
          </div>
        </div>
        <div className="match">
          <div className="match-percent">
            <FormattedMessage {...messages.match} />
          </div>
          {collegeData.famous_nearest_places}
        </div>
        <div className="college-offer-text">
          <div className="offer-text">{collegeData.offertext}</div>
          <div className="amenties-container">
            <div className="amenties-1">{collegeData.amenties[0]}</div>
            <div className="amenties-separator">.</div>
            <div className="amenties-1">{collegeData.amenties[1]}</div>
          </div>
        </div>
      </p>
    </div>
  );
}

CollegeCard.propTypes = {
  collegeData: PropTypes.object,
};

export default CollegeCard;
