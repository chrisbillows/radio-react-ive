import React from 'react'
import todos from '../data/todos.json';

export default function ArrayRender() {
  const todoComponents = todos.map(todo => <TodoItem title={todo.title} />);
  
  return (
    <main>
      <h1>To-do List</h1>
      <ul>
        {todoComponents}
      </ul>
    </main>
  )
}

function TodoItem(props) {
    return <li>{props.title}</li>;
  }



// ORIGINAL
{/* <TodoItem title="Learn React components" />
        <TodoItem title="Learn React props" />
        <TodoItem title="Learn conditional rendering" />
        <TodoItem title="Learn how to render lists" /> */}