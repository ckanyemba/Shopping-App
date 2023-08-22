import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';

// Importing actions from cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import CheckoutPage from './CheckoutPage';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };


  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body} key={item.id}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          {/* Existing cart display code */}

          <h2>Grand Total: $ {getTotalPrice()}</h2>
         <Link href={{
        pathname: '/CheckoutPage',
        query: { cartData: JSON.stringify(cart), totalPrice: getTotalPrice() }
      }} passHref legacyBehavior>
        <a className={styles.payNowButton}> Proceed to Checkout </a>
      </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
