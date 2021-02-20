import '../SmallCard/SmallCard.css'
import React, { useState } from 'react'
import upvotessrc from '../../images/upvote.svg'
import downvotessrc from '../../images/downvote.svg'

export default function SmallCard({ name, image }) {
  const [countUpVotes, setCountUpVotes] = useState(0)
  const [countDownVotes, setCountDownVotes] = useState(0)

  return (
    <>
      <figure>
        <img src={image} alt={name} width="100px" />
        <figcaption className="figCaption">
          <section className="votingContainer">
            <img
              src={upvotessrc}
              alt=""
              className="upvoting"
              onClick={() => setCountUpVotes(countUpVotes + 1)}
            />
            <p className="relative"> {countUpVotes} </p>

            <img
              src={downvotessrc}
              alt=""
              className="downvoting"
              onClick={() => setCountDownVotes(countDownVotes + 1)}
            />
            <p className="relative"> {countDownVotes}</p>
          </section>
        </figcaption>
      </figure>
    </>
  )
}
