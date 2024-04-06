import React from "react";
import { v4 as uuidv4 } from 'uuid';


export default function ShopCard({card}) {
  return (
    <div className='card' key={uuidv4()}>
      <h2 className='name'>{card.name}</h2>
      <span className='color'>{card.color}</span>
      <img className='img' src={card.img} alt={card.name} />
      <div className='card__bottom'>
        <span className='price'>${card.price}</span>
        <button className='button'>Add to card</button>
      </div>
    </div>
  )
}

// key={uuidv4}