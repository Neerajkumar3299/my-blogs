import { useRouter } from "next/router"
import styles from "../../styles/singleProduct.module.css"
function SingleProduct(){
    const router=useRouter();
    const {productid}=router.query;
    console.log(productid);
    return (
      <>
        <style jsx>
          {`
            h1,
            h3,
            h4,
            p {
              margin: 10px 0px;
            }
            p,
            h1,h4 {
              color: grey;
            }
          `}
        </style>
        <section className={styles.singleProductContainer}>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src="/image/mobile2.jpg" alt="product" />
            </div>
            <div className={styles.detail}>
              <div className={styles.ownerDetail}>
                <h1>Owner Detail</h1>
                <div className={styles.ownerGroup}>
                  <h4>Name</h4>
                  <p>Neeraj Yadav</p>
                </div>
                <div className={styles.ownerGroup}>
                  <h4>Mobile No</h4>
                  <p>9565439965</p>
                </div>
                <div className={styles.ownerGroup}>
                  <h4>Email</h4>
                  <p>ny587227@gmail.com</p>
                </div>
                <div className={styles.ownerGroup}>
                  <h4>Address</h4>
                  <p>
                    Shambhaji NGR Ashokvan Dahisar(E) Mumbai Maharastra-400068
                  </p>
                </div>
              </div>
              <div className={styles.productDetail}>
                <h1>Product Detail</h1>
                <div className={styles.price}>
                  <h4>Oppo</h4>
                  <p>₹4000.0</p>
                </div>
                <h3>OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)</h3>

                <p>
                  6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080
                  pixels. Larger screen to body ratio of 90.5%.Side Fingerprint
                  Sensor
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default SingleProduct