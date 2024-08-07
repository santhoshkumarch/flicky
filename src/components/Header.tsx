import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import '../styles/global.css';


const Header: React.FC = () => {
  return (
    <div className={`${styles.header_wrapper} ${styles.w_nav}`}>
    <div className={`${styles.container_default} ${styles.w_container}`}>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Cloudly X Logo" width={50} height={50} />
        <span>Flicky App</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/about" legacyBehavior><a>About</a></Link>
        <Link href="/blog" legacyBehavior><a>Blog</a></Link>
        <Link href="/pricing" legacyBehavior><a>Pricing</a></Link>
      </nav>
      <div className={styles.downloadButton}>
        <button >
          <span className={styles.qr_code}></span>
           <span className={styles.btn_text}>Download app</span>
          </button>
      </div>
    </header>
    </div>
    </div>
  );
}

export default Header;
