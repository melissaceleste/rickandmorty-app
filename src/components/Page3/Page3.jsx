import '../Page3/Page3.css'
// import React, { useState } from 'react'

export default function Page3({ title, hidden }) {
  return (
    <section hidden={hidden} className="Page3">
      {title}
    </section>
  )
}
