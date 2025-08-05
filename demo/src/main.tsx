import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router'

import './assets/reset.css'
import '../../dist/react-be-ui.css'
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
