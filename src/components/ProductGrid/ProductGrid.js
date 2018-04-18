import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";

import withCatalogItems from "containers/catalog/withCatalogItems";
import ProductItem from "components/ProductItem";

@withCatalogItems
class ProductGrid extends Component {
  static propTypes = {
    catalogItems: PropTypes.arrayOf(PropTypes.object)
  };

  renderProduct(edge) {
    const { node: { product } } = edge;
    const { _id, weight } = product;
    const gridItemSize = {
      0: {
        xs: 12,
        sm: 4,
        md: 3
      },
      1: {
        xs: 12,
        sm: 8,
        md: 6
      },
      2: {
        xs: 12,
        sm: 12,
        md: 9
      }
    };
    const gridItemProps = {
      key: _id,
      ...gridItemSize[weight]
    };
    return (
      <Grid item {...gridItemProps}>
        <ProductItem product={product} />
      </Grid>
    );
  }

  render() {
    const { catalogItems } = this.props;

    return (
      <section>
        <Grid container spacing={24}>
          {catalogItems.map(this.renderProduct)}
        </Grid>
      </section>
    );
  }
}

export default ProductGrid;
