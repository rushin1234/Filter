import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Recommended from './components/Recommended/Recommended'
import Products from './components/Products/Products'

import data from './components/db/data'

const App = () => {

  const [products, setProducts] = useState(data)

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [color, setColor] = useState('all')
  const [company, setCompany] = useState('all')
  const [price, setPrice] = useState('all')

  const getFilterProducts = () => {
    let filterProducts = data.filter((product) => {
      return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    if (category != 'all') {
      filterProducts = filterProducts.filter((product) => {
        return product.category === category
      })
    }
    if (color != 'all') {
      filterProducts = filterProducts.filter((product) => {
        return product.color === color
      })
    }
    if (company != 'all') {
      filterProducts = filterProducts.filter((product) => {
        return product.company === company
      })
    }
    if(price != 'all') {
      let start = Number(price)
      let end = Number(price) + 50
      filterProducts = filterProducts.filter((product) => {
        return product.newPrice >= start && product.newPrice <= end 
      })
    }
    return filterProducts
  }

  useEffect(() => {
    setProducts(getFilterProducts())
  }, [query, category, color, company, price])

  return (
    <div className="app">
      <div className="app-left">
        <Sidebar setCategory={setCategory} setColor={setColor} setPrice={setPrice}/>
      </div>
      <div className="app-right">
        <Header query={query} setQuery={setQuery} />
        <Recommended setCompany={setCompany} />
        <Products data={products} />
      </div>
    </div>
  )
}

export default App