import '../Page1/Page1.css'
// import React, { useState } from 'react'

export default function Page1({ title, hidden }) {
  return (
    <section hidden={hidden} className="Page1">
      {title}
    </section>
  )
}
