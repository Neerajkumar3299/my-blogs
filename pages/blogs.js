import styles from "../styles/blogs.module.css";
function Blog() {
  return (
    <>
      <style jsx>
        {`
          h3,
          p,
          button,
          h4 {
            margin: 5px 10px;
          }
          p {
            color: grey;
          }
        `}
      </style>
      <section className={styles.BlogContainer}>
        <div className={styles.header}>
          <h1>Blogs</h1>
        </div>
        <div className={styles.Blogs}>
          <div className={styles.Blog}>
            <img src="/image/blog.webp" alt="" />
            <h3>How to learn Next JS in 10 minuts</h3>
            <p>
              6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
              Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
            </p>
            <button className={styles.btn}>
              <a href="/blog/23">Read more</a>
            </button>
          </div>
          <div className={styles.Blog}>
            <img src="/image/blog.webp" alt="" />
            <h3>How to learn Next JS in 10 minuts</h3>
            <p>
              6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
              Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
            </p>
            <button className={styles.btn}>
              <a href="/blog/23">Read more</a>
            </button>
          </div>
          <div className={styles.Blog}>
            <img src="/image/mobile.jpg" alt="" />
            <h3>How to learn Next JS in 10 minuts</h3>
            <p>
              6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
              Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
            </p>
            <button className={styles.btn}>
              <a href="/blog/23">Read more</a>
            </button>
          </div>
          <div className={styles.Blog}>
            <img src="/image/blog.webp" alt="" />
            <h3>How to learn Next JS in 10 minuts</h3>
            <p>
              6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
              Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
            </p>
            <button className={styles.btn}>
              <a href="/blog/23">Read more</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
