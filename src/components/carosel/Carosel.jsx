import React, { useContext } from "react";
import styles from "./carosel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../asset/carosel1.jpg";
import pic2 from "../../asset/carosel3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PostContext } from "../../context/ContextApi";

const Carosel = () => {
  let { filter } = useContext(PostContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {filter==null>0 ? (
        <section data-aos="zoom-in-right">
          <Carousel
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            data-interval={3000}
          >
            <div id="img" className={styles.img}>
              <img src={pic1} height="100vh" />
            </div>
            <div id="img" className={styles.img}>
              <img src={pic2} height="100vh" />
            </div>
          </Carousel>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carosel;
