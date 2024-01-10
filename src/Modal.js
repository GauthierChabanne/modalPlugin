import React from 'react';
import './Modal.css';

/**
 * The modal shown when an employe is created.
 * @component
 * @example
 *
 * const open = True;
 * const onClose = False;
 *
 * return (
 *  <Modal open={open} onClose={false} />
 * )
 */

function Modal({ open, onClose }){
  if (!open) return null;
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Employee Created !</h2>
        <button onClick={onClose} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
};
export { Modal } ;
