import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  overlay: {
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    width: '100%',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    border: 0,
  }
}

const Modal = ({ isOpen, children }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
