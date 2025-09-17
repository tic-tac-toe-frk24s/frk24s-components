import React from 'react';
import styles from './Regler.module.css';

const Regler = ({ buttonLabel = 'Regler' }) => {
  const [open, setOpen] = React.useState(false);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button className={styles.btn} onClick={openModal}>
        {buttonLabel}
      </button>

      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <h2>Rules — Gomoku</h2>
            <ul>
              <li>Two players alternate placing stones (black and white).</li>
              <li>First player to get five in a row (horizontal, vertical, diagonal) wins.</li>
              <li>Cannot place on an already occupied cell.</li>
            </ul>
            <button className={styles.closeBtn} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Regler;
