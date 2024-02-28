import React from 'react';
import fruits from '../data/fruits.json';

//!  WHAT IS HAPPENING?
// 1. Data in fruits json. Data is key, value pairs e.g "name": "Apple"
// 2. JSON is JS native and in JSX we import. (JS its require) 
// 3. We iterate over the array and return a "string" of JSX aka a JXC ItemCard component, with the string including the ItemCard function call and required arguments.
// 4. There are three approaches.  Two are simple functions that let "map" handle iterating over the objects.



export default function ArrayDetailRender() {
    
    // Basic function - pass to map and map handles iterating over objects in the array.
    function fruitProcessor(fruit) {
        return <ItemCard key={fruit.id} symbol={fruit.symbol} name={fruit.name} price={fruit.price} />
    }
    
    // Arrow function of the above with an implict return of the JSX component.
    const arrFunc = fruit => <ItemCard key={fruit.id} symbol={fruit.symbol} name={fruit.name} price={fruit.price} />
    
    //  Doesn't require map.  Pass fruits, it iterates, add the JSX component to the array items.  It then returns the full array.
    // React renders an array in JSX in sequence, which is why this works.
    //? Actually map also just produces an array.
    function fpNoMap(arr) {
        const items = [];
        for (let item of arr) {
            items.push(
                <ItemCard key={item.id} symbol={item.symbol} name={item.name} price={item.price} />
            )
        } 
        return items
    }

    return (
        <main>
            <h1>React Fruit Market</h1>
            <div class="items-grid">{fruits.map(arrFunc)}</div>
            <div class="items-grid">{fruits.map(fruitProcessor)}</div>
            <div class="items-grid">{fpNoMap(fruits)}</div>
        </main>
    );
}

//! MORE COMPLEX EXAMPLE - stripped out above.
//     return (
//       <main>
//         <h1>React Fruit Market</h1>
//         <div className="items-grid">
//           {fruits.map(fruit =>              //! using map & arrow func inside the return 
//             <ItemCard
//               key={fruit.id}  // ADDING A KEY
//               symbol={fruit.symbol} 
//               name={fruit.name} 
//               price={fruit.price}
//             />
//           )}
//           </div>
//       </main>
//     );
//   }

function ItemCard({ symbol, name, price}) {
    return (
        <div className="item-card">
        <div className="symbol">{symbol}</div>
        <h3>{name}</h3>
        <p>£{price.toFixed(2)}</p>
        </div>
    )
}

