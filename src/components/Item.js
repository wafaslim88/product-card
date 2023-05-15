import React from 'react'
import PropTypes from 'prop-types'
//the Item component takes as props (name,price,image and alertProduct) 
//the alertProduct prop is passed down to each Item component as a prop called alertProduct
function Item({name,price,image,alertProduct}) {
//in the Item component,the alertProduct prop is used in the handleClick function to display an alert message when the div is clicked.
    const handleClick = () => {
        alertProduct(name);};
  return (
    <div className='item-card' onClick={handleClick}>
      <img src={image} alt={name} style={{width:150,marginRight:10}} />
      <div className="product-info">
          <h3>{name}</h3>
          <p>{price} TND</p> 
      </div>     
    </div>
  );
}

Item.defaultProps = {
    name : "Default Name",
    price:0,
    image:"none"
}      

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, 
    image : PropTypes.string.isRequired,
    alertProduct : PropTypes.func.isRequired
}


export default Item


