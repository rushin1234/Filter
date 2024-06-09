import React, { useState } from 'react'
import './Recommended.css'
import Button from 'react-bootstrap/Button';

const Recommended = ({setCompany}) => {
  const [menu, setMenu] = useState('All')
  const handleClick = (e) => {
    // console.log(e.target.textContent)
    setCompany(e.target.textContent)
    setMenu(e.target.textContent)
  }
  return (
    <div className="recommended">
      <div className="recommended-title">Recommended</div>
      <div className="reommended-btns">
      <Button className='btn' onClick={handleClick} variant={`${menu === 'All' ? 'primary' : 'outline-primary'}`}>All</Button>
      <Button className='btn' onClick={handleClick} variant={`${menu === 'Nike' ? 'secondary' : 'outline-secondary'}`}>Nike</Button>
      <Button className='btn' onClick={handleClick} variant={`${menu === 'Adidas' ? 'success' : 'outline-success'}`}>Adidas</Button>
      <Button className='btn' onClick={handleClick} variant={`${menu === 'Puma' ? 'warning' : 'outline-warning'}`}>Puma</Button>
      <Button className='btn' onClick={handleClick} variant={`${menu === 'Vans' ? 'danger' : 'outline-danger'}`}>Vans</Button>
      </div>
    </div>
  )
}

export default Recommended