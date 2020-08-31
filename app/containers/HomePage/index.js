/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import InfiniteScroll from 'react-infinite-scroller';

import Loader from 'components/Loader';
import CollegeCard from 'components/CollegeCard';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { requestColleges } from './actions';

import './style.css';

export function HomePage({
  OnRequestCollegesData,
  homePage: { hasMore, data, loading },
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => loadMoreItems(), []);

  function loadMoreItems() {
    OnRequestCollegesData();
  }

  function renderItems() {
    return data.map(item => (
      <CollegeCard collegeData={item} key={item.college_name} />
    ));
  }

  return (
    <div className="homePage">
      <div className="heading">
        <FormattedMessage {...messages.header} />
      </div>

      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreItems}
        hasMore={hasMore}
        loader={loading ? <Loader key="loader" /> : null}
        className="List"
      >
        {renderItems()}
      </InfiniteScroll>
    </div>
  );
}

HomePage.propTypes = {
  OnRequestCollegesData: PropTypes.func,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnRequestCollegesData: () => dispatch(requestColleges()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
