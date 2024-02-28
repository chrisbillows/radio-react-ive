import React from 'react';

export function PropsFruit() {
  return (
    <main className="fruits">
      <h1 className="fruits">React Fruit Market</h1>
      <div className="items-grid">
        <ItemCard symbol="🍎" name="Apple" price={0.3} />    
        <ItemCard symbol="🍍" name="Pineapple" price={1} />
        <ItemCard symbol="🍉" name="Watermelon" price={4} />
        <ItemCard symbol="🥝" name="Kiwi" price={0.5} />
        <DisplayProps symbol="🍎" name="Apple" price={0.3} />    
        </div>
    </main>
  );
}

// How props work...  EXAMPLE: <ItemCard symbol="🍎" name="Apple" price={0.3} />

// It's similar to calling a function with arguments in Python e.g. 

// item_card("🍎", "Apple", 0.3)

// EXCEPT IT'S NOT...

// Because props are passed as a single object, it works like a dictionary (or object in JavaScript terms) of key-value pairs.

// So, it’s more like creating: props = {'symbol': "🍎", "name": "Apple", "price": 0.3 }

// Then we're passing this the function: 
// item_card(props) 
// where props = {'symbol': "🍎", "name": "Apple", "price": 0.3 }
// We then unpack this inside the function item_card()



function ItemCard(props) {
  
  const {symbol, name, price} = props  // Destructuring the props.  Can access in the OBJECT as props.symbol etc. and avoid destructuring step.
  
  return (
        <div className="item-card">
          <div className="symbol">{symbol}</div>
          <h3>{name}</h3>
          <p>£{price}</p>
        </div>
    );
}

function DisplayProps (props) {
  console.log("An 'is the console working string: " +"Hello world!");
  console.log("Accessing a props property with dot notation: " + props.name);
  console.log("What type is props.name? " + typeof props.name);
  console.log("What type is props itself? " + typeof props);
  console.log(props);
  return (
    <h2 style={{color: 'purple'}} className="scroll-flash">CHECK CONSOLE!</h2>
  )
}
