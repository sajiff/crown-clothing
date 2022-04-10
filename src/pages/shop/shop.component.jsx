import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...othercollectionProps }) => (
      <CollectionPreview key={id} {...othercollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
