import './Header.css'
import React from 'react'
const Header = () => {
  return (
    <div className='header'>
        <div className="header__title">
            <h1>Budget Tracker</h1>
        </div>

        <div className="header__balance">
            $0
        </div>
    </div>
  )
}

export default Header