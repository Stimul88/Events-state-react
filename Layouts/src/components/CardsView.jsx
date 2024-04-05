import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({cards, style}) {
  return (
      <div
        className={`cards-view ${style}`}
      >
        {cards.map(item => <ShopCard card={item}/>)}
      </div>
  )
}