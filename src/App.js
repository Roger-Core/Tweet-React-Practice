import React from 'react'
import Nav from './Pages/NavBar/Nav'
import TweetUsers from './Pages/TweetUsers/TweetUsers'
import Footer from './Pages/Footer/Footer'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className='App'>
        <TweetUsers />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App