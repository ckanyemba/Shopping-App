// product.js

import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch the product data using getStaticProps or getServerSideProps

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {Contemporary Novels}</p>
      {/* Display the product information */}
    </div>
  );
}
