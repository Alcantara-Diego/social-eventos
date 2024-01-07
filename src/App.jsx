// import { useState } from 'react'
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
function App() {
  

  return (
    <div className="container">
      <Nav></Nav>

      <div className="content">
        <Sidebar></Sidebar>
        <Feed></Feed>
      </div>
    </div>
  )
}

export default App
