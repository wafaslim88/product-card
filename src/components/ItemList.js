
import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types'

const ItemList = ({ items,alertProduct }) => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:100}}>
      {items.map((item) => (
        <Item
          name={item.name}
          price={item.price}
          image={item.image}
          alertProduct={alertProduct}
        />
      ))}
    </div>
  );
};
ItemList.propTypes = {alertProduct: PropTypes.func.isRequired}
export default ItemList;
