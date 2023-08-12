import React from 'react';

const AboutUsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us Page</h1>
      <div style={styles.authorProfile}>
        <img
          src="https://via.placeholder.com/150"
          alt="Author Profile"
          style={styles.authorImage}
        />
        <div style={styles.authorDetails}>
          <h2 style={styles.authorName}>John Doe</h2>
          <p style={styles.authorDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <h2 style={styles.subHeading}>Our Story</h2>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <ul style={styles.list}>
        <li>
          <h3 style={styles.subHeading}>Our Mission</h3>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in
          </p>
        </li>
        <li>
          <h3 style={styles.subHeading}>Our Vision</h3>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in
          </p>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  authorProfile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  authorImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  authorDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  subHeading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
};

export default AboutUsPage;