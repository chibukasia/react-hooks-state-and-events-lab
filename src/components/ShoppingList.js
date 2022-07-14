import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
//destructring returned values 
const [selectedCategory, setSelectedCategory] = useState("All");
const [itemList, setItemList] = useState(items)


const itemsToDisplay = itemList.filter(eachItem=>{
  if(selectedCategory==="All"){
    return true;
  }else{
    return eachItem.category === selectedCategory;
  }
})
function handleCategory(event){
 setSelectedCategory(event.target.value);
}



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"onClick={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
