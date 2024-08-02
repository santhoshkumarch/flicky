import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.container_default}>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Cloudly X Logo" width={50} height={50} />
        <span>Flicky App</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/about" legacyBehavior><a>About</a></Link>
        <Link href="/blog" legacyBehavior><a>Blog</a></Link>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Pages</button>
          <div className={styles.dropdownContent}>
            <Link href="/page1" legacyBehavior><a>Page 1</a></Link>
            <Link href="/page2" legacyBehavior><a>Page 2</a></Link>
          </div>
        </div>
        <Link href="/pricing" legacyBehavior><a>Pricing</a></Link>
      </nav>
      <div className={styles.downloadButton}>
        <button>Download app</button>
      </div>
    </header>
    </div>
  );
}

export default Header;
