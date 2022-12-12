import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const SelectedUser = useSelector(state => state.selectedUser);
  const user = useSelector(state => state.users.data).filter(item => item.id.common===SelectedUser);

  const detailUser = () => {
    navigate('/detailUser')
}

const listeTodo = () => {
    navigate('/listeTodo')
}

  return (
    <div>
      {user.lenght !== 0 &&
        <div>
          <img src={user[0].image.png} alt=''/>
          <h2>{user[0].firstName} {user[0].lastName}</h2>
          <button onClick={detailUser}>Detail User</button>
          <button onClick={listeTodo}>Liste des taches</button>
        </div>
      }
    </div>
  )
}
