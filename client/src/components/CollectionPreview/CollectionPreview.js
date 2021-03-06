import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionPreview.styles.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <Link className="title" to={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
