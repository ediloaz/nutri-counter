import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from '../pages/main/Main'
import NewFood from '../pages/newFood/NewFood'
import Summary from '../pages/summary/Summary'
import AddWater from '../pages/addWater/AddWater'
import History from '../pages/history/History'
import ChangeUser from '../pages/changeUser/ChangeUser'
import HouseFinances from '../pages/houseFinances/HouseFinances'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-food" element={<NewFood />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/add-water" element={<AddWater />} />
        <Route path="/history" element={<History />} />
        <Route path="/change-user" element={<ChangeUser />} />
        <Route path="/house-finances" element={<HouseFinances />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
