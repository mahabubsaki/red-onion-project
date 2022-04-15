import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import BreakFast from './components/part-components/BreakFast/BreakFast';
import Lunch from './components/part-components/Lunch/Lunch';
import Dinner from './components/part-components/Dinner/Dinner';
import React, { createContext } from 'react';
import useFoods from './components/hooks/useFoods';
import './App.css'
import SingleFood from './components/pages/SingleFood/SingleFood';
export const ApiContext = createContext()

function App() {
  const foods = useFoods()
  return (
    <ApiContext.Provider value={{ foods }}>
      <div className="w-100 overflow-hidden App">
        <Header></Header>
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
        </Routes>
        <Footer></Footer>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
