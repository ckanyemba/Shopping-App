import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Navbar.module.css';

export const Header = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <div><nav>
            <ul className={styles.links}>
              <li className={styles.navlink}>
                <Link href="/" passHref legacyBehavior>
                  <a> EUOU</a>
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/shop" passHref legacyBehavior>
                  <a> SHOP </a>
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/events" passHref legacyBehavior>
                  <a> EVENTS </a>
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/blog" passHref legacyBehavior>
                  <a> NEWS </a>
                </Link>
              </li> 
               <li className={styles.navlink}>
                <Link href="/cart" passHref legacyBehavior>
                  <a> CART </a>
                </Link>
              </li>
               <li className={styles.navlink}>
                <Link href="/about-us" passHref legacyBehavior>
                  <a> CRAIG </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> 
          <h6>Unfolding Enigmatic Untold Odysseys - UEUO</h6></p>
      </div>
    </header>
  );
};

