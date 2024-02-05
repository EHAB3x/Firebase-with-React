import React from 'react'
import "./ItemList.css"
import {useFirestore} from '../../Firebase/useFirestore'
import Item from '../item/Item';

const ItemList = () => {
  const {items} = useFirestore();
  return (
    <div className='item-list'>
        {items.map(item => {
          return <Item item={item} key={item.id}/>
        })}
    </div>
  )
}

export default ItemList