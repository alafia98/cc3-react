import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function Acceuil() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }
  }, []);
  return (
    <div>
        <Header />
        <div>
          <Outlet />
        </div>
    </div>
  )
}
