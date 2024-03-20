import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import { useAuth } from "./context/Authcontext"
import ImageGeneratorPage from "./pages/ImageGeneratorPage"

function App() {

  const auth = useAuth()

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
       {auth?.isLoggedIn && auth.user && ( 
       <Route path='/chat' element={ <Chat /> } />
       )}
        <Route path='/signup' element={ <Signup /> } />
        <Route path='*' element={ <NotFound /> } />
        <Route path="/" element={<Chat />} />
        <Route path="/generate-image" element={<ImageGeneratorPage />} />
      </Routes>
     

    </main>
  )
}

export default App
