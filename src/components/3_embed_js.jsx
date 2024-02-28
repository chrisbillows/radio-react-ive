import React from 'react'

export function JsBasicEmbed() {
  const date = new Date().toDateString()

  return (
    <div>
      <p>The current date is {date}.</p>
    </div>
  )
}