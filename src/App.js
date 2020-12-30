import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import BreadBottom from './components/BreadBottom/BreadBottom';
import BreadTop from './components/BreadTop/BreadTop';
import ButtonList from './components/ButtonsList/ButtonList';
import Topping from './components/Topping/Topping';


const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id:nanoid(), price:50},  
    {name: 'Cheese', count: 0, id:nanoid(), price: 20},
    {name: 'Salad', count: 0, id:nanoid(), price: 5},
    {name: 'Bacon', count: 0, id:nanoid(), price: 30}  
  ]);

  const [toppings, setToppings] = useState([]);

  const countPrice = ingredients.reduce((acc, ingredient)=>{
    return acc+(ingredient.count*ingredient.price);
  },40)

  const addIngredient = id =>{
    const index = ingredients.findIndex(p=>p.id===id);
    const ingredientsCopy = [...ingredients];
    const ingredient = {...ingredients[index]};
    if(ingredient.count<1){
      ingredient.count++;
      const topping = {};
      topping.id=ingredient.id
      topping.name=ingredient.name;
      toppings.push(topping);
    }
    ingredientsCopy[index]=ingredient;
    setIngredients(ingredientsCopy);
  }

  const removeIngredient = id =>{
    const index = ingredients.findIndex(p=>p.id===id);
    const ingredientsCopy = [...ingredients];
    const ingredient = {...ingredients[index]};
    if(ingredient.count>0) {
      ingredient.count--;
    };
    ingredientsCopy[index]=ingredient;
    setIngredients(ingredientsCopy);
    const indexTopping = toppings.findIndex(p=>p.id===id);
    const toppingsCopy = [...toppings];
    toppingsCopy.splice(indexTopping,1);
    setToppings(toppingsCopy);
  }

  const buttonList = (
    ingredients.map(ingredient=>(
      <ButtonList
      key={ingredient.id}
      ingredient={ingredient.name}
      count={ingredient.count}
      addIngredient={(e)=>addIngredient(ingredient.id)}
      removeIngredient={(e)=>removeIngredient(ingredient.id)}>
      </ButtonList>
    ))
  );

  const toppingList = (
    toppings.map(topping=>(
      <Topping
      key={topping.id}
      className={topping.name}>
      </Topping>
    ))
  )

  


  return (
    <div className="App">
      <div className='Main'>
         <div className='Ingredients'>
         <h2>Ingredients</h2>
          {buttonList}
          </div>
            <div className='Burger'>
              <h2>Burger</h2>
              <BreadTop></BreadTop>
                {toppingList}
              <BreadBottom></BreadBottom>
              <p>Price:{countPrice}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
