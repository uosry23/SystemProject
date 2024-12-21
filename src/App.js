import React from 'react'
import LoginAndRegister from './Comppnents/LoginAndRegister'

import './index.css'
import Categories from './Categories'
import ResponsiveAppBar from './Header'
import { Route, Routes } from 'react-router-dom'
import Dashbord from './Dashbord'
import Add from './Add';
import Edite from './Edite'
const App = () => {
  return (
    <div>
      <LoginAndRegister/>
      {/* <ResponsiveAppBar /> */}
      {/* <Dashbord /> */}
      <Routes>
        
        <Route path='/admin' element={<Dashbord />} />
        <Route path="/products" element={<Categories />} />
        <Route path='/admin/add' element={<Add />} />
        <Route path="admin/edite/:id" element={<Edite />} />
      </Routes>


    </div>
  )
}

export default App