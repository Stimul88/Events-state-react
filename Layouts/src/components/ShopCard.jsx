import React from "react";

export default function ShopCard({card}) {
  return (
    <div className='card'>
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