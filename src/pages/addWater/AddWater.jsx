import { useEffect, useState, useContext } from 'react'

import { LinearProgress } from '@mui/material';

import BackButton from "../../components/BackButton/BackButton"
import { AppContext } from '../../context/AppContext';

import { CATEGORIES } from '../../constants/categories'
import { calcCategoryCalc } from '../../helpers/categories';

import './addWater.css'

const Categorie = ({ id, name, planned, currentDaily }) => {
  const allowed = planned - currentDaily
  return (
    <div className="categorieContainer">
      <span>{name}</span>
      <span className="avalaible"><b>Disponible {allowed} de {planned}</b>
      <br />
      {currentDaily > 0 && `(Has comido ${currentDaily} ${ currentDaily === 1 ? ' Porción' : ' Porciones'})`}</span>
      <span className="kCal">Calorías consumidas: {calcCategoryCalc(id, currentDaily)}</span>
      <LinearProgress className="LinearProgress" variant="determinate" value={(allowed * 100) / planned} />
    </div>
  )
}

const AddWater = () => {
  const { plann, daily, getDaily, getPlanns } = useContext(AppContext);

  const [plannData, setPlannData] = useState({})
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const plannQuery = getPlanns(plann)
    plannQuery.then((data) => {
      console.log(`Plan actual de ${plann}:`, data)
      setPlannData(data)
    })

    const dailyQuery = getDaily(daily)
    dailyQuery.then((data) => {
      console.log(`Daily actual de ${daily}:`, data)
      setDailyData(data)
    })
  }, [plann, daily, getPlanns, getDaily])

  return (
    <div className="AddWater">
      <div className="Header">
        <BackButton />
      </div>
      <h1>Pronto, mamoris</h1>
    </div>
  );
}

export default AddWater