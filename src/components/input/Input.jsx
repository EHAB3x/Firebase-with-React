import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <div className='input'>
        <form>
            <input type="text" name="title" placeholder='Enter Title'/>
            <input type="number" name="amount" placeholder='Amount'/>
            <input type="date" name="date" placeholder='Date'/>

            <label htmlFor="type">Type</label>
            <select name="type">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <input type="submit" value="ADD"/>
        </form>
    </div>
  )
}

export default Input