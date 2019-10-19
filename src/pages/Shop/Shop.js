import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/CollectionOverview';
import CollectionPage from '../Collection';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            render={routeProps => (
              <CollectionPageWithSpinner isLoading={loading} {...routeProps} />
            )}
          />
          <Route
            exact
            patch={`${match.path}`}
            render={routeProps => (
              <CollectionOverviewWithSpinner
                isLoading={loading}
                {...routeProps}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
