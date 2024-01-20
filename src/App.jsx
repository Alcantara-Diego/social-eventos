// import { useState } from 'react'
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import UsuarioInfo from "./UsuarioInfo"

function App() {
  

  return (
    <div className="container">
      <Nav></Nav>

      <div className="content">
        <Sidebar></Sidebar>
        <div className="telaPrincipal">
          <Feed></Feed>
          <UsuarioInfo></UsuarioInfo>
        </div>
      </div>
    </div>
  )
}

export default App
