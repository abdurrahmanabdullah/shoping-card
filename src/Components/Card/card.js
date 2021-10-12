import React from 'react';

const Card = (props) => {
    const Card=props.card;

    let total=0;
    for(let i=0;i<Card.length;i++){
        const product=Card[i];
        total=total+product.price
    }
    let shiping=0;
    if(total>35){
        shiping=4.99;
    }
    else if(total>60){
        shiping =12.99;
    }
    const tax=Math.round(total/10);
    return (
        <div>
            <h3>order summery</h3>
            <p>items order:{Card.length}</p>
            <p>Product price:{total}</p>
            <p><small>shiping price:{shiping}</small></p>
            <p><small>Total price:{total+shiping+tax} (vat is added 10 persent)</small></p>
        </div>
    );
};

export default Card;