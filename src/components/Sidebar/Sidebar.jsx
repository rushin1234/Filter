import React from 'react'
import './Sidebar.css'

const Sidebar = ({setColor, setCategory, setPrice}) => {
  return (
    <div className="sidebar">
      <div>
      <div className="sidebar-title">Category</div>
      <div><input defaultChecked value='all' type="radio" name='test1' onClick={(e)=>setCategory(e.target.value)} /> All</div>
      <div><input value='sneakers' type="radio" name='test1' onClick={(e)=>setCategory(e.target.value)} /> Sneakers</div>
      <div><input value='flats' type="radio" name='test1' onClick={(e)=>setCategory(e.target.value)} /> Flats</div>
      <div><input value='sandals' type="radio" name='test1' onClick={(e)=>setCategory(e.target.value)} /> Sandals</div>
      <div><input value='heels' type="radio" name='test1' onClick={(e)=>setCategory(e.target.value)} /> Heels</div>

      <div className="sidebar-title">Price</div>
      <div><input defaultChecked value='all' type="radio" name='test2' onClick={(e)=>setPrice(e.target.value)} /> All</div>
      <div><input value={0} type="radio" name='test2' onClick={(e)=>setPrice(e.target.value)} /> $0 - $50</div>
      <div><input value={50} type="radio" name='test2' onClick={(e)=>setPrice(e.target.value)} /> $50 - $100</div>
      <div><input value={100} type="radio" name='test2' onClick={(e)=>setPrice(e.target.value)} /> $100 - $150</div>
      <div><input value={150} type="radio" name='test2' onClick={(e)=>setPrice(e.target.value)} /> Over $150</div>

      <div className="sidebar-title">Color</div>
      <div><input defaultChecked value='all' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> All</div>
      <div><input value='black' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> Black</div>
      <div><input value='blue' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> Blue</div>
      <div><input value='red' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> Red</div>
      <div><input value='green' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> Green</div>
      <div><input value='white' type="radio" name='test3' onClick={(e)=>setColor(e.target.value)} /> White</div>
      </div>
    </div>
  )
}

export default Sidebar