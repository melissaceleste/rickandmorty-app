import '../Page2/Page2.css'
// import React, { useState } from 'react'

export default function Page2({ title, hidden }) {
  return (
    <section hidden={hidden} className="Page2">
      {title}
    </section>
  )
}
