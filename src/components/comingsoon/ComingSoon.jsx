import React, { useEffect } from "react";
import styles from "./cominSoon.module.css";
import comingSoonImg from "../../asset/comingSoon.jpg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ComingSoon = () => {


  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.comingSoonBlock} data-aos="zoom-in-right">
      <span title="cancel">
        <Link to="/login">
          <RxCross2 />
        </Link>
      </span>
      <h1>we are working on this module</h1>
      <div>
        <img src={comingSoonImg} alt="" />
      </div>
    </section>
  );
};

export default ComingSoon;
