import React from 'react';
import { connect } from 'react-redux';
import './Collection.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/CollectionItem';

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (_, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId)
  });

export default connect(mapStateToProps)(Collection);
