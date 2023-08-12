// pages/get-books.js
import React from 'react';
import booksData from '../data/data.json';
import styles from '../styles/get-books.module.css';

const GetBooksPage = () => {
  const books = booksData.books_categories;

  return (
    <div className={styles.getbooks_list}>
      {books.map((book, index) => (
        <div key={book.id} className={`${styles.card} ${index % 2 === 1 ? styles.even : ''}`}>
          <img src={book.image} alt={book.title} className={styles.image} />
          <div className={styles.content}>
            <h2>{book.title}</h2>
            <p>Description: {book.description}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetBooksPage;
