import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './pages/Home'
import LossMakingScanner from './pages/LossMakingScanner'
import BusinessTools from './pages/BusinessTools'
import CompetitorScanner from './pages/CompetitorScanner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'loss-making-products-scanner', element: <LossMakingScanner /> },
      { path: 'competitors-scanner', element: <CompetitorScanner /> },
      { path: 'business-tools', element: <BusinessTools /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
