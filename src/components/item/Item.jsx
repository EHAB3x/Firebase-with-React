import React, { useRef } from 'react'
import './Item.css'
import { useFirestore } from '../../Firebase/useFirestore'
const Item = ({item}) => {
    const {deleteItem} = useFirestore();
    const deleteBtn = useRef();

  return (
    <div 
        className='item'
        onMouseEnter={()=> deleteBtn.current.style.display = 'block'}
        onMouseLeave={()=> deleteBtn.current.style.display = 'none'}
    >


        <div className="item__title">
            <h3>{item.title}</h3>
        </div>

        <div className="item__info">
            <p className={item.amount >= 0 ? "income": "expense"}>${Math.abs(item.amount)}</p>
            <p>{item.date}</p>
            <button className='item__delete' onClick={()=>deleteItem(item.id)} ref={deleteBtn}>Delete</button>
        </div>
    </div>
  )
}

export default Item