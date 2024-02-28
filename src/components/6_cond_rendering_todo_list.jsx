import React from 'react'

export default function TodoManual() {
    return (
      <main>
        <h1>Todo List</h1>
        <ul>
          <TodoItem isComplete={true} title="Learn React components" />
          <TodoItem isComplete={false} title="Learn React props" />
          <TodoItem isComplete={true} title="Learn conditional rendering" />
        </ul>
      </main>
    )
  }

function TodoItem({ title, isComplete }) {
  return (
    isComplete
      ? <li>{title} ✔️</li>
      : <li>{title}</li>
  )
}

