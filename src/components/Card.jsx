import React from 'react'
const Card = (props) => {
  return (
      <div className='card'>
        <img src={props.url} alt="" />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button className='btn-primary' onClick={() => window.location.href = props.link}>View Detailes</button>
      </div>

  )
}

export default Card
