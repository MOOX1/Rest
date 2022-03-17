import React from 'react'
import Modal from "react-modal"
import "../CSS/App.css"
import PickingUpThePosts from "../Component/pickingUpThePosts;"


Modal.setAppElement('#root');

const App = () => {
  return (
    <div>
      <h1>List</h1>
      <PickingUpThePosts />
    </div>
  )
}

export default App