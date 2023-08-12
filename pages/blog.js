// pages/blog.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/blog.module.css'; // Create this CSS module file

const blogPosts = [
  {
    id: 1,
    title: 'Title of Blog Post 1',
    date: 'August 10, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Title of Blog Post 2',
    date: 'August 15, 2023',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more blog posts here
];

const BlogPage = () => {
  return (
    <div className={styles.blog}>
      <h1>Blog</h1>
      <ul className={styles.blogList}>
        {blogPosts.map(post => (
          <li key={post.id} className={styles.blogItem}>
            <h2>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} legacyBehavior>
              <a className={styles.readMoreLink}>Read More</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
