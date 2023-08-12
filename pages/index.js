import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';
import styles from '../styles/Home.module.css';
import CategoryCard from '../src/components/CategoryCard/CategoryCard';

export default function Home({ data }) {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.small}>
          <CategoryCard image="https://images.unsplash.com/photo-1552937075-967cf58b74a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9oYW5uZXNidXJnfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" name="Johannesburg" />
          <CategoryCard image="https://images.unsplash.com/photo-1502106532309-50b662d8d9de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhhcmFyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" name="Harare" />
          <CategoryCard image="https://images.unsplash.com/photo-1591005383716-6f55494025f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhYm9yb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" name="Gaborone" />
        </div>
        
        <div className={styles.large}>
          <CategoryCard image="https://images.unsplash.com/photo-1566022511934-edcc3310c9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVzYWthfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" name="LUSAKA" />
          <CategoryCard
            image="https://images.unsplash.com/photo-1614075565833-7d31bb969f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJldG9yaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            name="PRETORIA"
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
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
