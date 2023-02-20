import styles from "../styles/contact.module.css";
function Contact(){
    return (
      <>
        <style jsx>
            {
                `
                h1,p{
                    margin:10px 0px;
                    padding:0px 20px;
                }
                p{
                    color:grey;
                }
                `
            }
        </style>
        <section className={styles.contactArea} id="contact">
          <div className={styles.contact}>
            <h1>Contact Us</h1>
            <p>please fill this form in a decent manner.</p>
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">Email id</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">Query</label>
                <textarea name="query" id="query" rows="5"></textarea>
              </div>
              <div>
                <button type="submit" className={styles.btn}>Send</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Contact