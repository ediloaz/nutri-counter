import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { Face2, Face4 } from '@mui/icons-material';

import BackButton from "components/BackButton/BackButton"
import { AppContext } from 'context/AppContext';

import './changeUser.css'

const User = ({ id, icon, name, lastPlann, changeUser }) => {
  
  return (
    <Button className="userContainer" onClick={() => changeUser(id, lastPlann)}>
      {icon === 'Face2' && <Face2 size="large" />}
      {icon === 'Face4' && <Face4 size="large" />}
      <span>Seleccionar a {name}</span>
    </Button>
  )
}

const ChangeUser = () => {
  const { getUsers, changeUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  useEffect(() => {
    const users = getUsers()
    
    users.then((data) => {
      console.log(`Usuarios: `, data)
      setUsers(data)
    })
  }, [getUsers])

  const _changeUser = (userId, lastPlann) => {
    changeUser(userId, lastPlann)
    navigate('/')
  }

  return (
    <div className="ChangeUser">
      <BackButton />
      <div className="users">
        {users.map((user) =>
          <User
          changeUser={_changeUser}
          id={user?.id} 
          key={user?.id}
          name={user?.name}
          icon={user?.icon}
          lastPlann={user?.lastPlann}
          />
          )}
      </div>
    </div>
  );
}

export default ChangeUser