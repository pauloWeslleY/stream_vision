import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './styles/global.css'

export function App() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  )
}
