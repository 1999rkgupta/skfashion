import React from "react";
import { useContext } from "react";
import { PostContext } from "../../context/ContextApi";
import styles from "./wishList.module.css";
import emptyWhishList from "../../asset/emptyWishList.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import backgroundImage from "../../asset/cartBackground.jpg";


const WhishList = () => {
  let { wishlist } = useContext(PostContext);
  // console.log(wishlist);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.cartBlock} data-aos="zoom-in-down">
      <div
        style={
          wishlist.length > 0
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "fixed",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw",
                backgroundSize: "cover",
              }
            : { backgroundImage: "none" }
        }
      >
        {wishlist.length > 0 ? (
          wishlist.map((li, val) => {
            let { image, title, price } = li;
            return (
              <div>
                <img src={image} alt="" />
                <p>{title}</p>
                <strong>₹{price}</strong>
                <br />
                <button
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#ff9f00",
                    color: "white",
                    width: "9.2em",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Place Order
                </button>
              </div>
            );
          })
        ) : (
          <span className={styles.emptyCart}>
            <img src={emptyWhishList} />
          </span>
        )}
      </div>
    </section>
  );
};

export default WhishList;
