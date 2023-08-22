import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from '../../../styles/Navbar.module.css';

export const Header = () => {

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <header className={styles.navbar}>
      <div>
        <div><nav>
          <ul className={styles.links}>
            <li className={styles.navlink}>
              <Link href="/" passHref legacyBehavior>
                <a> UeOU</a>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/shop" passHref legacyBehavior>
                <a> SHOP </a>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/events" passHref legacyBehavior>
                <a> INFORMATION </a>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/cart">
                <p>Cart ({getItemsCount()})</p>
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
        <div className={styles.title}>
          Unfolding Enigmatic Untold Odysseys
          </div>
        </div>
    </header>
  );
};

