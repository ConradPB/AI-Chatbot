import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Authcontext.tsx'
import { Toaster } from 'react-hot-toast';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:7000/api/v1'

//with credentials helps you to exchange cookies with the BE
axios.defaults.withCredentials = true


const theme = createTheme({ 
  typography: { 
    fontFamily: 'roboto slab, serif', 
    allVariants: { color: 'white' }, 
  }, 
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-right' />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
