import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route
            exact
            patch={`${match.path}`}
            component={CollectionOverviewContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
