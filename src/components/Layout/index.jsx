import styles from "./style.module.scss";
// import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <img src="/logo.png" className={styles.logo} />
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Equipe</a>
            </li>
            <li>
              <a href="">Preços</a>
            </li>
            <li className={styles.signin}>
              <a href="https://appdirectu.vercel.app/auth">Entrar</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div></div>
      </footer>
    </>
  );
};

export default Layout;
