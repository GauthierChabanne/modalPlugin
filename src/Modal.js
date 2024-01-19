import React from 'react';
import './Modal.css';

/**
 * The modal shown when an employe is created.
 * @component
 * @example
 *
 * const open = True;
 * const onClose = function();
 * const message = "Employé créé !";
 *
 * return (
 *  <Modal open={open} onClose={onClose} message={message}  />
 * )
 */

function Modal({ open, onClose, message }){
  if (!open) return null;
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
};
export { Modal } ;
