import Link from "next/link";
import Head from "next/head";
import classes from "../styles/header.module.scss";
export function Header({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <header className={classes.header}>
        <div className={classes.header__logo}>
          <div className={classes.we}>
            <span className={classes.we__w}>w</span>
            <span className={classes.we__e}>e</span>
          </div>
          <div className={classes.rdevs}>
            <span>Rdews</span>
          </div>
        </div>
        <nav className={classes.header__navigation}>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
          <Link href={"/about"}>
            <a>About us</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
