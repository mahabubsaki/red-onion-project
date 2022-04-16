import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import BreakFast from './components/part-components/BreakFast/BreakFast';
import Lunch from './components/part-components/Lunch/Lunch';
import Dinner from './components/part-components/Dinner/Dinner';
import React, { createContext, useEffect, useState } from 'react';
import useFoods from './components/hooks/useFoods';
import './App.css'
import SingleFood from './components/pages/SingleFood/SingleFood';
import useCart from './components/hooks/useCart';
import addToDb from './components/utilities/addToDb';
import deleteItem from './components/utilities/deleteItem';
import NotFound from './components/pages/NotFound/NotFound';
import Checkout from './components/pages/Checkout/Checkout';
import setQuantity from './components/utilities/setQuantity';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
export const ApiContext = createContext()

function App() {
  const [foods,] = useFoods()
  const [cart, setCart] = useCart(foods)
  const handleClearAll = () => {
    localStorage.removeItem('cart')
    setCart([])
  }
  const deleteSingle = (item) => {
    deleteItem(item)
    const storedCart = []
    const localStorageObject = JSON.parse(localStorage.getItem('cart'))
    const allFoods = JSON.parse(localStorage.getItem('allFoods'))
    for (const id in localStorageObject) {
      const findById = allFoods.find(food => food.id === id)
      if (findById) {
        findById.quantity = localStorageObject[id]
        storedCart.push(findById)
      }
    }
    const currentCart = storedCart.filter(food => food.id !== item.id)
    setCart(currentCart)
  }
  const handleAddtoCart = (id, quantity) => {
    addToDb(id, quantity)
    const storedCart = []
    const localStorageObject = JSON.parse(localStorage.getItem('cart'))
    for (const id in localStorageObject) {
      const findById = foods.find(food => food.id === id)
      if (findById) {
        findById.quantity = localStorageObject[id]
        storedCart.push(findById)
      }
    }
    setCart(storedCart)
  }
  const handleQuantity = (item, quantity) => {
    setQuantity(item.id, quantity)
    const storedCart = []
    const localStorageObject = JSON.parse(localStorage.getItem('cart'))
    const allFoods = JSON.parse(localStorage.getItem('allFoods'))
    for (const id in localStorageObject) {
      const findById = allFoods.find(food => food.id === id)
      if (findById) {
        findById.quantity = localStorageObject[id]
        storedCart.push(findById)
      }
    }
    const quantityItem = storedCart.find(i => i.id === item.id)
    const rest = storedCart.filter(i => i.id !== item.id)
    const newCart = [...rest, quantityItem]
    setCart(newCart)
  }
  return (
    <ApiContext.Provider value={{ foods, handleAddtoCart, cart, handleClearAll, deleteSingle, handleQuantity }}>
      <div className="w-100 overflow-hidden App">
        <Header cart={cart}></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
            <Route path='/lunch' element={<Lunch></Lunch>}></Route>
            <Route path='/dinner' element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path='/home' element={<Home></Home>}>
            <Route path='home/breakfast' element={<BreakFast></BreakFast>}></Route>
            <Route path='home/lunch' element={<Lunch></Lunch>}></Route>
            <Route path='home/dinner' element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path='/breakfast/:id' element={<SingleFood></SingleFood>}></Route>
          <Route path='/lunch/:id' element={<SingleFood></SingleFood>}></Route>
          <Route path='/dinner/:id' element={<SingleFood></SingleFood>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
