import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tasks from './Tasks.jsx'
import Teste from './Teste.jsx'

const router = createBrowserRouter([
  {
    path: '/tasks',
    element: <Tasks/>,
  },
  {
    path: '/teste',
    element: <Teste/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)

