import React from 'react'
import "./ItemList.css"
import {useFirestore} from '../../Firebase/useFirestore'

const ItemList = () => {
  const {items, deleteItem} = useFirestore();
  return (
    <div className='item-list'>
        <table width="100%">
            <thead>
              <tr>
                <td>Title</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {items.map(({title,amount,date,id})=>(
                <tr key={id} className='white'>
                  <td>{title}</td>
                  <td className={amount >= 0 ? "income": "expense"}>${Math.abs(amount)}</td>
                  <td>{date}</td>
                  <td><button onClick={()=>deleteItem(id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default ItemList