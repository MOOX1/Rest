import React from 'react'
import Modal from "react-modal"
import PickingUpThePosts from "../Component/pickingUpThePosts;"
import '../CSS/app.css'


Modal.setAppElement('#root')

const App = () => {
  return (
    <div>
      <h1 className='title'>LIST</h1>
      <PickingUpThePosts />
    </div>
  )
}

export default App