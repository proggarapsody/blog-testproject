import React, { useState } from 'react';
import './modal.scss';
import { createPortal } from 'react-dom';

const Modal = ({ active, setActive, children, className }) => {
  return createPortal(
    (
      <div className={`${active ? 'modal active' : 'modal'}`} onClick={() => setActive(false)}>
        <div
          className={`${active ? 'modal__content active' : 'modal__content'} ${
            className && className
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    ),
    document.getElementById('portal')
  );
};

export default Modal;
