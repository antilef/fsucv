import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SigunUpPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SigunUpPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
