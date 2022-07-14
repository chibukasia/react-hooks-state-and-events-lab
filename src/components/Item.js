import React, {useState} from "react";

function Item({ name, category }) {

  //destructure the items returned whe the useState is called
  const [inCart, setInCart]=useState(false);

  function handleCart(){
    setInCart(inCart=>!inCart)
  }

  const cartClass = inCart ? "Remove From Cart" : "Add to Cart" 
  const liClassName = inCart ? "in-cart" : ""
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartClass}</button>
    </li>
  );
}

export default Item;
