import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { MyTasks, Inbox, Projects, Standups, Meetings, Settings } from '../components/Menus'
import Login from '../pages/Login'
import Main from '../pages/Main'

const MyRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("user"));
    if (!login) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<Main />}>
        <Route path="mytasks" element={<MyTasks />}/>
        <Route path="inbox" element={<Inbox />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="standups" element={<Standups />}/>
        <Route path="meetings" element={<Meetings />}/>
        <Route path="settings" element={<Settings />}/>
      </Route>
    </Routes>
  )
}

export default MyRoutes