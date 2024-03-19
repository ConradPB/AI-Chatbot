import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Authcontext.tsx'
import { Toaster } from 'react-hot-toast';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import axios from 'axios'
let baseURL = 'http://localhost:7000/api/v1'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://zilla-chat.onrender.com/api/v1'
}
axios.defaults.baseURL = baseURL

//with credentials helps you to exchange cookies with the BE
axios.defaults.withCredentials = true

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}
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
