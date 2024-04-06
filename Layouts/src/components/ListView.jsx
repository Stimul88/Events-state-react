import React from "react";
import ShopItem from "./ShopItem";
import { v4 as uuidv4 } from 'uuid';

export default function ListView({items, style}) {
  return (
    <div
      className={`items-view ${style}`}>
      {items.map(item => <ShopItem item={item} key={uuidv4()}/>)}
    </div>
  )
}