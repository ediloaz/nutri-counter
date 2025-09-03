import React, { createContext, useState, useEffect } from 'react';
import Firebase from 'services/firebase';
import { createDailyIfNotExists, addNewFood } from 'helpers/firebase';
import { getNameCurrentDaily } from 'helpers/daily';

export const AppContext = createContext();

const DEFAULT_USER = 'eddie';

export const AppProvider = ({ children }) => {
  const { db, getUsers, getDaily, getPlanns } = Firebase();
  
  const [user, setUser] = useState();
  const [plann, setPlann] = useState();
  const [daily, setDaily] = useState();

  const changeUser = (newUser, lastPlann) => {
    const dailyName = getNameCurrentDaily(newUser);
    setUser(newUser);
    setDaily(dailyName);
    window.localStorage.setItem('user', newUser);

    createDailyIfNotExists(db, getDaily, dailyName);
    
    if (lastPlann) {
      setPlann(lastPlann);
    } else {
      const userPromise = getUsers(newUser);
      userPromise.then((data) => {
        setPlann(data?.lastPlann);
      });
    }
  };

  const _addNewFood = (food) => addNewFood(db, food, daily);

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user') || DEFAULT_USER;
    window.localStorage.setItem('user', storedUser);
    changeUser(storedUser);
  }, []);

  const value = {
    db,
    user,
    daily,
    plann,
    // functions
    addNewFood: _addNewFood,
    changeUser,
    // firebase functions
    getUsers,
    getDaily,
    getPlanns,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
