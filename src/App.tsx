import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './styles/global.css'

export function App() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  )
}
