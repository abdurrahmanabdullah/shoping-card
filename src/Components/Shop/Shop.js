import React, { useState } from 'react';
import fakeData from '../../fakeData';
import'./Shop.css';
import Product from '../Product/Product';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/card';



const Shop = () => {
const first10=fakeData.slice(0,10);
const [products, setproducts] = useState(first10);
const [cart, setcart] = useState([]);
const handleaddbutton=(product)=>{

const newcart=[...cart,product];
setcart(newcart);
}
    return (
        <div className="shop-container">
    <div className="product-container">
        {
            products.map(pd=><Product 
                handleaddbutton={handleaddbutton}
                product={pd}>

                </Product>)

        }
       

    </div>
           <div className="card-container">
          <Card card={cart}></Card>
           </div>
        </div>
    );
};

export default Shop;  