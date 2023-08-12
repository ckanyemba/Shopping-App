import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Events.module.css'

export const HomePage = ({ data }) => (
  <div className={styles.cat_events}>
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
        <a className={styles.cards} href={`/events/${ev.id}`}>
          <div className="image">
            <Image width={500} height={400} alt={ev.title} src={ev.image} />
          </div>
          <div className={styles.container}>
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>
        </a>
      </Link>
    ))}
  </div>
);

