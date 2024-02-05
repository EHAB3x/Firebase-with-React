import { useFirestore } from '../../Firebase/useFirestore'
import './Header.css'
import React from 'react'
const Header = () => {
  const {budget} = useFirestore();
  return (
    <div className='header'>
        <div className="header__title">
            <h1>Budget Tracker</h1>
        </div>

        <div className="header__balance">
            ${budget}
        </div>
    </div>
  )
}

export default Header