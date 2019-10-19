import shopTypes from './shopTypes';

export const updateCollections = collectionMap => ({
  type: shopTypes.UPDATE_COLLECTION,
  payload: collectionMap
});
