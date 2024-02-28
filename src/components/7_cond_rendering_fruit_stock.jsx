import React from 'react'

export default function FruitStock() {
    return (
      <main>
        <h1>React Fruit Market</h1>
        <div className="items-grid">
          <ItemCard isInStock={true} symbol="🍎" name="Apple" price={0.3} />
          <ItemCard isInStock={true} symbol="🍍" name="Pineapple" price={1} />
          <ItemCard isInStock={true} symbol="🍉" name="Watermelon" price={4} />
          <ItemCard isInStock={false} symbol="🥝" name="Kiwi" price={0.5} />
        </div>
      </main>
    )
  }

function ItemCard({ isInStock, symbol, name, price }) {
    return (
        <div className="item-card">
            <div className="symbol">{symbol}</div>
                <h3>{name}</h3>
                <p>£{price.toFixed(2)}</p>
                <p>-----</p>
                <p>{isInStock ? "In Stock!" : "Out of Stock 😭"}</p> 
      </div>
    );
  }
  