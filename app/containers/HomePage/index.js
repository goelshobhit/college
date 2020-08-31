/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import Loader from 'components/Loader';

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

  const loadMoreItems = () => {
    OnRequestCollegesData();
  };

  function isItemLoaded() {
    return hasMore;
  }

  const Row = () => <div>I am a row</div>;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="homePage">
      <div className="heading">
        <FormattedMessage {...messages.header} />
      </div>

      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1000}
        loadMoreItems={loadMoreItems}
        minimumBatchSize={10}
        threshold={100}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={150}
            itemCount={data.length === 0 ? 10 : data.length}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
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
