import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';
import styles from '../styles/Home.module.css';
import CategoryCard from '../src/components/CategoryCard/CategoryCard';
import ProductCard from '../src/components/ProductCard/ProductCard';

export default function Home({ data }) {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.small}>
          <CategoryCard image="https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" name="Contemporary Novels" />
          <CategoryCard image="https://images.unsplash.com/photo-1518728184315-fbd6b3c430a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" name="Fiction Novels" />
          <CategoryCard image="https://images.unsplash.com/photo-1585849837997-ac13cb616ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" name="None-Fiction Novels" />
        </div>
        
        <div className={styles.large}>
          <CategoryCard image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" name="EuOU" />
          <CategoryCard
            image="https://images.unsplash.com/photo-1563050860-87d45eaaeabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            name="Accessories"
          />
        </div>
      </main>



      <Head>
        <title>craigkanyemba</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  );
}

export async function getServerSideProps() {
  let data;

  try {
    const { events_categories } = await import('./api/products/data.json');
    data = events_categories;
  } catch (error) {
    console.error('Error loading data:', error);
  }

  return {
    props: {
      data: data || null,
    },
  };
}

