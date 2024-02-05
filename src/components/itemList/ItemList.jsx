import React from 'react'
import "./ItemList.css"
import {useFirestore} from '../../Firebase/useFirestore'

const ItemList = () => {
  const {items} = useFirestore();
  return (
    <div className='item-list'>
      <ul>
        {items.map(item => {
          return <li key={item.id}>{item.title} and {item.amount}</li>
        })}
      </ul>
    </div>
  )
}

export default ItemList