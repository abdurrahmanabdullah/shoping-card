import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const product = (props) => {
console.log(props);
    return (
        <div className="product">
<div>
<img src={props.product.img}alt=""/>
</div>
        <div>
      <h3 className="product-name">{props.product.name}</h3>
        <br/>
        <p>${props.product.price}</p>
       <button className="main-button"
       onClick={()=>props.handleaddbutton(props.product)}
       ><FontAwesomeIcon icon={faShoppingCart} />add to card </button>
        </div>
    </div>
    );
};

export default product;