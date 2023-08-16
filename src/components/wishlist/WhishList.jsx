import React from "react";
import { useContext } from "react";
import { PostContext } from "../../context/ContextApi";
import styles from "./wishList.module.css";
import emptyWhishList from "../../asset/whislist.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import backgroundImage from "../../asset/cartBackground.jpg";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const WhishList = () => {
  let { wishlist, setWishlist, setItem } = useContext(PostContext);
  console.log(wishlist);
  useEffect(() => {
    AOS.init();
  }, []);

  // !seprate data:
  let fetchItem = async id => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(data);
  };

  // !Remove:
  let Remove = id => {
    let list1 = [...wishlist];
    list1.splice(id, 1);
    setWishlist(list1);
  };
  return (
    <section className={styles.cartBlock} data-aos="zoom-in-down">
      <div>
        {wishlist.length > 0 ? (
          wishlist.map((li, val) => {
            let { image, id, price, description, rating } = li;
            return (
              <div key={val} className={styles.div1}>
                <Link to="/item" onClick={() => fetchItem(id)}>
                  <img src={image} alt="" />
                </Link>
                <div>
                  <Link to="/item" onClick={() => fetchItem(id)}>
                    <p>{description.slice(0, 120)}</p>
                  </Link>

                  <div>
                    <span className={styles.price}>₹{price}</span>
                    <span>
                      <strike className={styles.discount}>
                        ₹{rating.count}
                      </strike>
                    </span>
                    <span className={styles.disPercentage}>
                      {Math.round(((rating.count - price) / price) * 20)}% off
                    </span>
                  </div>
                  <div>
                    <span className={styles.rating}>
                      {rating.rate}
                      <span className={styles.star}>
                        <AiFillStar />
                      </span>
                    </span>
                    <span className={styles.rate}>
                      {Math.round(Math.random() * 5000)}
                      <span style={{ margin: "0 5px 0 5px" }}>Rating</span>&
                      <span style={{ margin: "0 5px 0 5px" }}>Reviews</span>
                      <span>{Math.round(Math.random() * 1000)}</span>
                    </span>
                  </div>
                </div>
                <span style={{ cursor: "pointer" }} onClick={() => Remove(id)}>
                  <MdDelete />
                </span>
                <br />
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
