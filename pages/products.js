import styles from "../styles/product.module.css"
function Product(){
    return (
      <>
        <style jsx>
          {`
            h3,
            p,
            button {
              margin: 5px 10px;
            }
            p {
              color: grey;
            }
          `}
        </style>
        <section className={styles.productContainer}>
          <div className={styles.header}>
            <h1>Products</h1>
            <form action="#">
              <input
                type="text"
                name="product"
                id="product"
                placeholder="Serach product e.g. mobile"
              />
              <button className={styles.search}>Search</button>
            </form>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src="/image/mobile2.jpg" alt="" />
              <div className={styles.price}>
                <h4>Oppo</h4>
                <h4>₹4000.0</h4>
              </div>
              <h3>OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)</h3>
              <p>
                6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
                Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
              </p>
              <button className={styles.btn} >
                <a href="/product/23">Check more</a>
              </button>
            </div>
            <div className={styles.product}>
              <img src="/image/mobile2.jpg" alt="" />
              <div className={styles.price}>
                <h4>Oppo</h4>
                <h4>₹4000.0</h4>
              </div>
              <h3>OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)</h3>
              <p>
                6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
                Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
              </p>
              <button className={styles.btn}>
                <a href="#">Check more</a>
              </button>
            </div>
            <div className={styles.product}>
              <img src="/image/mobile.jpg" alt="" />
              <div className={styles.price}>
                <h4>Oppo</h4>
                <h4>₹4000.0</h4>
              </div>
              <h3>OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)</h3>
              <p>
                6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
                Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
              </p>
              <button className={styles.btn}>
                <a href="#">Check more</a>
              </button>
            </div>
            <div className={styles.product}>
              <img src="/image/mobile2.jpg" alt="" />
              <div className={styles.price}>
                <h4>Oppo</h4>
                <h4>₹4000.0</h4>
              </div>
              <h3>OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)</h3>
              <p>
                6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels.
                Larger screen to body ratio of 90.5%.Side Fingerprint Sensor
              </p>
              <button className={styles.btn}>
                <a href="#">Check more</a>
              </button>
            </div>
          </div>
        </section>
      </>
    );
}
export default Product