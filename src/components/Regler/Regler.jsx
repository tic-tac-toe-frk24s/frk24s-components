import React, { useState } from 'react';

const Regler = ({ buttonLabel = 'Regler' }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>{buttonLabel}</button>

      {open && (
        <div>
          <h2 style={{ fontSize: '16px' }}>Rules — Gomoku</h2>
          <ul style={{ fontSize: '14px' }}>
            <li>Spelet spelas på ett rutnät 5×5.</li>
            <li>Två spelare turas om att lägga sin symbol (X eller O).</li>
            <li>Målet är att få 5 i rad – vågrätt, lodrätt eller diagonalt.</li>
            <li>Du får inte lägga på en ruta som redan är tagen.</li>
            <li>Den som först får 5 i rad vinner.</li>
          </ul>
          <button onClick={() => setOpen(false)} style={{ fontSize: '12px' }}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Regler;
