import styles from "../styles/register.module.css"
import Link from "next/link";
import {useState,useEffect,useRef} from "react"
function Regitser(){
    const [showPassword, setShowPassword] = useState(false);
    const password = useRef("");
    useEffect(() => {
      if (showPassword) {
        password.current.type = "text";
      } else {
        password.current.type = "password";
      }
    }, [showPassword]);
    return (
      <>
        <style jsx>
          {`
            h3,
            h4,
            p,
            form,
            Link {
              margin: 10px 0px;
            }
            h3 {
              text-transform: uppercase;
              color: grey;
            }
            p {
              color: grey;
            }
            a {
              text-decoration: none;
              color: blue;
            }
          `}
        </style>
        <section className={styles.register}>
          <h3>My Blog</h3>
          <h4>Sign up</h4>
          <p>Please Sign up to your account</p>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
            <input
              type="number"
              name="mobNo"
              id="mobNo"
              placeholder="Enter your mobile no"
              required
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your Address"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              ref={password}
              required
            />
            <p
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide password" : "show password"}
            </p>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
          <a href="/forgot-password">forgot password</a>
          <p>
            Already have an account? <a href="/login">login</a>
          </p>
        </section>
      </>
    );
}
export default Regitser;