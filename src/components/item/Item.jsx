import React from 'react'
import './Item.css'
const Item = ({item}) => {
  return (
    <div className='item'>
        <div className="item__title">
            <h3>{item.title}</h3>
        </div>

        <div className="item__info">
            <p className={item.amount >= 0 ? "income": "expense"}>${Math.abs(item.amount)}</p>
            <p>{item.date}</p>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Item