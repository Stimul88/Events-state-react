import React from "react";
import ShopCard from "./ShopCard";
import { v4 as uuidv4 } from 'uuid';

export default function CardsView({cards, style}) {
  return (
      <div
        className={`cards-view ${style}` }
      >
        {cards.map(item => <ShopCard key={uuidv4()} card={item} />)}
      </div>
  )
}