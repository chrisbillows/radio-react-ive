import React from 'react';

/*

💪 Exercise: Create a reusable component with props
Here's an app that provides information about different animals. However, the code is starting to look repetitive.

🎯 Your task:
- Reduce the repetition in the code below by creating a reusable component called AnimalCard.
- The AnimalCard component should accept the following props:
  - symbol
  - name
  - classification
*/

export default function PropsAnimals() {
  return (
    <main>
      <h1>Welcome to Animal DB!</h1>
        <AnimalCard symbol="🐶" name="Dog" classification=" Mammal" />
        <AnimalCard symbol="🐸" name="Frog" classification=" Amphibian" />
        <AnimalCard symbol="🦖" name="Tyrannosaurus Rex" classification=" Reptile" />
    </main>
  )
}


function AnimalCard(props) {
  
    const {symbol, name, classification} = props  // Destructuring the props.  Can access in the OBJECT as props.symbol etc. and avoid destructuring step.
    
    return (
          <div className="animal-card">
            <div className="symbol">{symbol}</div>
            <h2>{name}</h2>
            <p>
                <b>Classification:</b>{classification}
            </p>
          </div>
      );
}

  