import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview';
import CollectionPage from '../Collection';

function Shop({ match }) {
  return (
    <div>
      <Switch>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
        <Route exact patch={`${match.path}`} component={CollectionOverview} />
      </Switch>
    </div>
  );
}

export default Shop;
