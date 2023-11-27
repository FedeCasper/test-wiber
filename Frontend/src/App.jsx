import { useState, useEffect } from 'react'
import api from './api'
import router from '../Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

function App() {
  return <RouterProvider router={router} />
}

export default App
