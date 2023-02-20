import styles from "../styles/about.module.css"
function About(){
    return (
      <>
        <div className={styles.about} id="about">
          <h1>About us</h1>
          <div className={styles.application}>
            <h2>Application</h2>
            <p>
                This application will be helpful for new learners as well as experienced learners.
                Learners can get solution of thier query simply. They can also create their account and post some blogs related to their field or solution of any problem that he has faced in some task so that no other person face issue for same problem.User can also get some 2nd hand product details, if they are interested in any product, they can buy by contacting to owner of product.
            </p>
          </div>
          <div className={styles.developers}>
            <h2>Developers</h2>
            <div class={styles.developerContainer}>
              <div className={styles.developer}>
                <img src="/image/developer1.jpg" alt="develoepr" />
                <h3>Neeraj yadav</h3>
                <h4>Software Engineer</h4>
                <p>TCET (CSE-23)</p>
              </div>
            </div>
          </div>
          <div className={styles.services}>
            <h2>Services</h2>
            <div className={styles.serviceContainer}>
              <div className={styles.service}>
                <img src="/image/service1.png" alt="service" />
                <p>Find latest blogs</p>
              </div>
              <div className={styles.service}>
                <img src="/image/service2.webp" alt="service" />
                <p>Post Your own blogs</p>
              </div>
              <div className={styles.service}>
                <img src="/image/service3.jpg" alt="service" />
                <p>Buy & Sell products</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default About