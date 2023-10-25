import React from 'react';
import styles from '../Table.module.scss';

const TableLoader: React.FC = () => {
  return (
    <div className={styles.tableLoader}>
      Loading <span className={styles.tableLoader_blink}>.</span>
      <span className={styles.tableLoader_blink}>.</span>
      <span className={styles.tableLoader_blink}>.</span>
    </div>
  );
};

export default TableLoader;
