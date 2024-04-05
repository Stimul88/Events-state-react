import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({items, style}) {
  return (
    <div
      className={`items-view ${style}`}>
      {items.map(item => <ShopItem item={item}/>)}
    </div>
  )
}