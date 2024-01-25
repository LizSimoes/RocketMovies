
import { useState } from 'react'
import './App.css'

import PageSignIn from './pages/SignIn'
import Home from './pages/HomePage/home';

import HomeMain from './pages/HomePage/HomeMain';




function App() {

  const [user, setUser] = useState<any>();

  console.log(user);
  

  return (
    <>
      {user ? (
        <>
          <Home user={user} />
          <HomeMain/>
        </>
      ) : (
        <>
          <PageSignIn setUser={setUser} />
        </>
      )}
    </>
  )
}

export default App
