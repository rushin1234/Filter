import React from 'react'
import './Products.css'
import Item from '../Item/Item'

const Products = ({data}) => {
  return (
    <div className="products">
      {data.map((item, i) => {
        return <Item item={item}/>
      })}
    </div>
  )
}

export default Products