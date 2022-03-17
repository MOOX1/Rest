import React, { useState } from "react";
import Modal from 'react-modal'
import "../CSS/modal.css"

const HandleModal = ({ texto, onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [text, setTexto] = useState(texto);

  function handleClose() {
    onClose(text);
  }


  return (
    <div>
      <button value="edit" onClick={() => setIsOpen(true)}>Edit</button>
      <Modal className="modal" isOpen={modalIsOpen}>
        <h1> Edit the title </h1>
        <br/>
        <input autoFocus value={text} onChange={e => setTexto(e.target.value)} />
        <button type="submit" id="sub" onClick={() => {
          handleClose()
          setIsOpen(false)
        }} > Update </button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  )
}

export default HandleModal;