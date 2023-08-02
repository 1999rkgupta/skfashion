import React from "react";
import styles from "./_footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  return (
    <section className={styles.footerBlock} >
      <article>
        <div className={styles.footerBlockDiv1}>
          <aside className={styles.Aside1}>
            <h2 style={{ color: "white" }}>Super Market</h2>
            <p>
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>
            <span>
              <FaFacebookSquare
                style={{ color: "#285da1", margin: "30px 7px" }}
              />
              <FaTwitterSquare
                style={{ color: "#03a9f4", margin: "30px 7px" }}
              />
              <FaPinterestSquare
                style={{ color: "#d2173f", margin: "30px 7px" }}
              />
            </span>
          </aside>
          <aside className={styles.Aside2}>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Instructor</li>
              <li>Career</li>
              <li>Become a Teacher</li>
              <li>Contact</li>
            </ul>
          </aside>
          <aside className={styles.Aside3}>
            <h2>Platform</h2>
            <ul>
              <li>Browse Library</li>
              <li>Library</li>
              <li>Partners</li>
              <li>News & Blogs</li>
              <li>FAQs</li>
              <li>Tutorials</li>
            </ul>
          </aside>
          <aside className={styles.Aside4}>
            <h2>Subscribe</h2>
            <span
              style={{
                color: "grey",
                position: "absolute",
                top: "2.8em",
                right: "1em",
                fontSize: "20px",
              }}
            >
              <BsSearch />
            </span>
            <input type="text" name="" id="" />
            <p>Get the latest news and updates right at your inbox.</p>
          </aside>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default Footer;
