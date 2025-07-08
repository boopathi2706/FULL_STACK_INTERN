import React from 'react'

const Current = ({classNamees,ids,current_score_id,current_score}) => {
  return (
    <div className={classNamees} id={ids}>
          <p>CURRENT</p>
          <p id={current_score_id}>{current_score}</p>
    </div>
  )
}

export default Current