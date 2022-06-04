import React from 'react';
import Modal from './../Modal/Modal';
import styles from './confirm.module.scss';

// custom confirm dialog component
const Confirm = ({ title, onConfirm, onReject, active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive} className={styles.confirm}>
      <div className={styles.confirmContainer}>
        <h3>Do you want to delete post?</h3>
        <div className={styles.confirmBtns}>
          <button onClick={onConfirm} className={'primary-button'}>
            Yes
          </button>
          <button onClick={onReject} className={'secondary-button'}>
            no
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
