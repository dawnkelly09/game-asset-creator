import Image from 'next/image';
import styles from './app.module.css';
import { DocsCard, HelloComponentsCard, HelloNearCard } from '@/components/cards';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
      Home
      </div>
    </main>
  );
}
