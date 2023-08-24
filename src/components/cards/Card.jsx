import React from 'react'
import './card.css'

const Card = () => {
  return (
      <div className='card'>
          <div className='card__section'>
              <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="card-img" />
              </div>
              <div className="card__heading">
                  <h4>Card Title</h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
          </div>
      </div>
  )
}

export default Card;