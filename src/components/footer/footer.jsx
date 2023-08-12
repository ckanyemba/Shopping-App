import styles from '../../../styles/Footer.module.css';

export const Footer = () => {
    return (
      <footer className={styles.footer}>
         © <span className={styles.brand}> Apadana Group </span>{' '}
        {new Date().getFullYear()}
      </footer>
    );
  };
  
  