import '../SmallCard/SmallCard.css'
import React, { useState } from 'react'
// import upvotessrc from '../../images/upvote.svg'
// import downvotessrc from '../../images/downvote.svg'

import { ReactComponent as UpvoteSVG } from '../../images/upvote.svg'
import { ReactComponent as DownvoteSVG } from '../../images/downvote.svg'

export default function SmallCard({ name, image }) {
  const [countUpVotes, setCountUpVotes] = useState(0)
  const [countDownVotes, setCountDownVotes] = useState(0)
  // const upvote = <UpvoteSVG />
  // const downvote = <DownvoteSVG />

  /*  function change() {
    if (countUpVotes > 1) {
      UpvoteSVG.className = 'upvotingClicked'
    }
  } */

  return (
    <>
      <figure>
        <img src={image} alt={name} width="100px" />
        <figcaption className="figCaption">
          <section className="votingContainer">
            <UpvoteSVG
              role="button"
              text={countUpVotes}
              className="upvoting"
              onClick={() => setCountUpVotes(countUpVotes + 1)}
            />
            <p className="relative colorUpVotes"> {countUpVotes} </p>

            <DownvoteSVG
              role="button"
              text={countDownVotes}
              className="downvoting"
              onClick={() => setCountDownVotes(countDownVotes + 1)}
            />
            <p className="relative colorDownVotes"> {countDownVotes}</p>
          </section>
        </figcaption>
      </figure>
    </>
  )
}
