// pages/return/[id].js
import React from 'react';
import { useRouter } from 'next/router';

const ReturnPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Return Page</h1>
      <p>This is the content of the return page with ID: {id}</p>
    </div>
  );
};

export default ReturnPage;
