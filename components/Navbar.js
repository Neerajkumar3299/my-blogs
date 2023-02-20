import styles from "../styles/navbar.module.css"
import Link from "next/link"
import {CgProfile} from "react-icons/Cg"
import {AiOutlineMenu} from "react-icons/Ai"
import {useState,useRef,useEffect} from "react";
import useWidth from "../hook/UseWidth"
import { useRouter } from "next/router";
function Navbar(){
    const [showLinks,setShowLinks]=useState(false);
    const [showProfileLink,setShowProfileLink]=useState(false);
    const [pathname,setPathname]=useState("/");
    const screenWidth=useWidth();
    const linkHeight=useRef();
    const profile=useRef();
    const pname=useRouter().pathname;
    useEffect(()=>{
        if(showLinks){
            linkHeight.current.style.height="auto";
        }
        else{
            linkHeight.current.style.height="0px";
        }
    },[showLinks])
    useEffect(()=>{
        if(screenWidth>=760){

            linkHeight.current.style.height="auto"
        }
        else{
            linkHeight.current.style.height = "0px";
        }
    },[screenWidth])
    useEffect(()=>{
        if(showProfileLink){
            profile.current.style.display="flex";
        }
        else{
            profile.current.style.display = "none";
        }
    },[showProfileLink])
    useEffect(()=>{
      setPathname(pname)
    },[pname])
    return (
      <>
        <style jsx>{``}</style>
        <nav className={styles.nav}>
          <AiOutlineMenu
            className={styles.menu}
            onClick={() => setShowLinks(!showLinks)}
          />
          <div className={styles.logo}>
            <Link
              href="/"
              className={styles.logoContent}
              onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
            >
              <img src="/blog.ico" alt="icon" className={styles.logoIcon} />
              <h1 className={styles.logoHeader}>
                My <span>Blog</span>
              </h1>
            </Link>
          </div>
          <div className={styles.links} ref={linkHeight}>
            <ul>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/"
                className={
                  pathname == "/"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Home</li>
              </Link>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/#about"
                className={
                  pathname == "/#about"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>About</li>
              </Link>

              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/#contact"
                className={
                  pathname == "/#contact"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Contact</li>
              </Link>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/blogs"
                className={
                  pathname == "/blogs"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Blogs</li>
              </Link>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/products"
                className={
                  pathname == "/products"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Products</li>
              </Link>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/login"
                className={
                  pathname == "/login"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Login</li>
              </Link>
              <Link
                onClick={showLinks ? () => setShowLinks(!showLinks) : ""}
                href="/register"
                className={
                  pathname == "/register"
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                <li>Register</li>
              </Link>
            </ul>
          </div>
          <div className={styles.profile}>
            <div className={styles.account}>
              <CgProfile
                className={styles.profileIcon}
                onClick={() => {
                  setShowProfileLink(!showProfileLink);
                }}
              />
              <div className={styles.accoutLinks} ref={profile}>
                <Link href="/" className={styles.accountLink}>
                  My Blogs
                </Link>
                <Link href="/" className={styles.accountLink}>
                  My Products
                </Link>
                <Link href="/logout" className={styles.accountLink}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}
export default Navbar