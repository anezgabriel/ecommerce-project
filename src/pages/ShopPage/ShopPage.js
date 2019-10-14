import React from 'react';
import SHOP_DATA from './data';
import CollectionPreview from '../../components/CollectionPreview';

function Shop() {
  return (
    <div>
      {SHOP_DATA.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}

export default Shop;
