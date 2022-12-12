import React from 'react'
import { useSelector } from 'react-redux';

export default function DetailUser() {
    const SelectedUser = useSelector(state => state.selectedUser);
    const user = useSelector(state => state.user.data).filter(item => item.users.id===SelectedUser);
  return (
    <div>
        {user.length!==0 && 
            <div>
                <img src={user[0].image.png} alt="" />
                <h3>First name : {user[0].firstName}</h3>
                <h3>Last name : {user[0].lastName}</h3>
                <h3>Age : {user[0].age}</h3>
                <h3>Gender : {user[0].gender}</h3>
                <h3>Email : {user[0].email}</h3>
                <h3>Phone : {user[0].phone}</h3>
                <h3>Poids : {user[0].poids}</h3>
                <h3>Hauteur : {user[0].hauteur}</h3>
                <h3>Date Naissance : {user[0].birthDate}</h3>
                <h3>Groupe Sanguin  : {user[0].booldGroup}</h3>
                <h3>Couleur de l'oeil  : {user[0].eyeColor}</h3>
            </div>
        }
    </div>
  )
}
