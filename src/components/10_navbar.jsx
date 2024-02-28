import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1>React App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/staticPage">1. Static Page</Link></li>
        <li><Link to="/js-basic">3. JS Basic</Link></li>
        <li><Link to="/props-fruit">4. Fruit as Props</Link></li>
        <li><Link to="/props-animals">5. Animals as Props</Link></li>
        <li><Link to="/todo-manual">6. Cond rendering todolist</Link></li>
        <li><Link to="/fruitstock">7. Cond rendering fruit stock</Link></li>
        <li><Link to="/array-render">8. Render array</Link></li>
        <li><Link to="/array-detail-render">9. Render array detail</Link></li>
      </ul>
    </nav>
  )
}