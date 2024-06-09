import React, { useState } from 'react'
import './Recommended.css'
import Button from 'react-bootstrap/Button';

const Recommended = ({setCompany}) => {
  const [menu, setMenu] = useState('all')
  return (
    <div className="recommended">
      <div className="recommended-title">Recommended</div>
      <div className="reommended-btns">
      <Button onClick={(e)=>{
        setCompany('all')
        setMenu('all')
      }} variant={`${menu === 'all' ? 'primary' : 'outline-primary'}`}>All Products</Button>
      <Button onClick={(e)=>{
        setCompany('Nike')
        setMenu('nike')
      }} variant={`${menu === 'nike' ? 'secondary' : 'outline-secondary'}`}>Nike</Button>
      <Button onClick={(e)=>{
        setCompany('Adidas')
        setMenu('adidas')
      }} variant={`${menu === 'adidas' ? 'success' : 'outline-success'}`}>Adidas</Button>
      <Button onClick={(e)=>{
        setCompany('Puma')
        setMenu('puma')
      }} variant={`${menu === 'puma' ? 'warning' : 'outline-warning'}`}>Puma</Button>
      <Button onClick={(e)=>{
        setCompany('Vans')
        setMenu('vans')
      }} variant={`${menu === 'vans' ? 'danger' : 'outline-danger'}`}>Vans</Button>
      </div>
    </div>
  )
}

export default Recommended