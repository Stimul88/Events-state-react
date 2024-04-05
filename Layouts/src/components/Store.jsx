import React, { useState } from "react";
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardsView.jsx";
import ListView from "./ListView.jsx";

export const Store = () => {
  const [view, setView] = useState("view_list");

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];


  return (
    <>
      <IconSwitch
        icon={view}
        onSwitch={(newView) => setView(newView)}
      />
      <CardsView
        cards={products}
        style={view ==='view_list' ? '' : 'hidden' }
      />
      <ListView
        items={products}
        style={view ==='view_module' ? '' : 'hidden' }
      />
    </>
  )
}
