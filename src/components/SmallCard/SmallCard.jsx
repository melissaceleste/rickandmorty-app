import '../SmallCard/SmallCard.css'
import React, { useState } from 'react'

export default function SmallCard({ name, image }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <figure>
        <img src={image} alt={name} width="100px" />
        <figcaption className="figCaption">{name}</figcaption>
      </figure>

      <button className="upvoting" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button className="downvoting" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  )
}
