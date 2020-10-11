import React from 'react'

import Modal from './Modal'
import './styles/DeleteBadgeModal.css'

function DeleteBadgeModal (props) {
  return <Modal isOpen={props.isOpen} onClose={props.onClose} >
    <div className="DeleteBadge">
      <h1>Are You Sure?</h1>
      <p className="mb-2">You are about to delete this badge.</p>
    </div>
    <div className="deleteButtons">
      <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4 d-button ">Delete</button>
      <button onClick={props.onClose} className="btn btn-primary d-button ">Cancel</button>
    </div>
  </Modal>
}

export default DeleteBadgeModal