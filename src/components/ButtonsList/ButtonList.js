import React from 'react';
import './ButtonList.css'

const ButtonList = props =>{
  return(
    <div className="buttonsBlog">
        <button onClick={props.addIngredient} className="addBtn"><strong>Add</strong></button>
        <p><b>{props.ingredient}</b></p>
        <p>Count X:{props.count}</p>
        <button onClick={props.removeIngredient} className="deleteBtn">Remove Ingredient</button>
    </div>
  )
}

export default ButtonList;