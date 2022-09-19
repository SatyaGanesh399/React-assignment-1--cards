import React from 'react'

export default function CarCard(props      ) {
  return (
    <div className='car-card'>
    <img src={props.src} alt=""/>
    <h4>{props.title}</h4>
    <p>Model : {props.model}</p>
    <p>Price : {props.price}</p>
    <button className='buy-btn'>Buy</button>
    </div>
  )
}

