import React from 'react';
import Button from '../Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import './CollectionItem.styles.scss';

function CollectionItem({ item, addItem }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
