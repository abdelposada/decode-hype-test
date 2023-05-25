import Image from 'next/image';
import styles from './page.module.css';
import Decode from '@/components/Decode/Decode';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Decode />
      </div>
    </main>
  );
}
