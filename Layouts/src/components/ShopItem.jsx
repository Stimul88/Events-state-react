import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ShopItem({item}) {
  return (
    <div className='item' key={uuidv4()}>
      <img className='img-list' src={item.img} alt={item.name} />
      <h2 className='name-list'>{item.name}</h2>
      <span>{item.color}</span>
      <span className='price'>${item.price}</span>
      <button className='button'>Add to card</button>
    </div>
  )
}