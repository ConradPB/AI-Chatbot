import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

import Logo from './shared/Logo'
import { useAuth } from '../context/Authcontext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth = useAuth()
  return (
    // App bar is a basic nav bar with predefined styles
    <AppBar sx={{ position: 'static', bgcolor: 'transparent',  }}>
      <Toolbar sx={{ display: 'flex' }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
          <>
            <NavigationLink 
            bg='#00fffc' 
            to='/chat' 
            text='Go to chat' 
            textColor='black'
            />
            <NavigationLink 
            bg='#51538f' 
            to='/' 
            text='Logout' 
            textColor='white'
            onClick={auth.logout}
            />
          </>
          ):(
          <>
          <NavigationLink 
          bg='#00fffc' 
          to='/login' 
          text='Login' 
          textColor='black'
          />
          <NavigationLink 
          bg='#51538f' 
          to='/signup' 
          text='Signup' 
          textColor='white'
          />
            </>
            )}
        </div>
      </Toolbar>
    </AppBar>
    
  )
}

export default Header

