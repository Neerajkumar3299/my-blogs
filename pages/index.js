
import styles from '@/styles/Home.module.css'
import About from "../components/About"
import Contact from "../components/Contact"
export default function Home() {
  return (
    <> 
      <main className={styles.home}>
        <div className={styles.image}>
          <img src="/blog-home.jpg" alt="home page" />
          <div className={styles.shadow}></div>
          <div className={styles.homeContent}>
            <h3>My Blogs</h3>
            <h1>Welcome to My Blogs</h1>
            <p>
              My Blog is a bog website that contains a lot of blogs on various
              topics.
            </p>
            <button class={styles.btn}>
              <a href="/blogs"> Read Blogs</a>
            </button>
          </div>
        </div>
        <About />
        <Contact/>
      </main>
    </>
  );
}
