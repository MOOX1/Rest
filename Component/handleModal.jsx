import React, { useState } from "react";
import Modal from 'react-modal'
import "../CSS/modal.css"

const HandleModal = ({ texto, onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [text, setTexto] = useState(texto);

  function handleClose() {
    onClose(text);
  }

  const Enter = () => {
    addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        handleClose()
        setIsOpen(false)

      }

    })
  }

  return (
    <div>
      <button value="edit" onClick={() => setIsOpen(true)}>Edit</button>
      <Modal  className="modal" isOpen={modalIsOpen}>
        <h1>Edit the title </h1>
        <br />
        <input autoFocus required maxLength='70' placeholder="Enter the new title" value={text} onKeyPress={Enter} onChange={e => setTexto(e.target.value)} />
        <br />
        <button type="submit" className="update" onClick={() => { handleClose(), setIsOpen(false) }} > Update </button>
        <button className="cancel" onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  )
}

export default HandleModal;