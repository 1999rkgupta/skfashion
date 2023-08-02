import React, { useContext, useEffect, useState } from "react";
import styles from "./item.module.css";
import { PostContext } from "../../context/ContextApi";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";
import Spinner from "../spinner/Spinner";

const Item = () => {
  let { item, store, setStore, sep, Setsep, count, setCount } =
    useContext(PostContext);
  // console.log(item);

  useEffect(() => {
    AOS.init();
  }, []);

  // !Notification:
  let Notification = () => {
    toast.success(`Successfully Added to cart`);
  };

  // !
  let verify = () => {
    if (!window.localStorage.getItem("userName")) {
      toast.success(`please login first`);
    }
  };

  return (
    <section data-aos="zoom-in-right">
      <div>
        {item === null ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          <section>
            <div className={styles.seprateItem}>
              <div className={styles.div1}>
                <img src={item.image} alt="" />
                <h2 data-aos="zoom-in-up">{item.title.slice(0, 25)}</h2>
              </div>
              <div className={styles.div2}>
                <p data-aos="fade-down-right" style={{ fontSize: "18px" }}>
                  {item.description.slice(0, 100)}
                  {item.description.slice(0, 100)}
                </p>
                <span className={styles.specialprice}>Special price</span>
                <span data-aos="fade-down-left" className={styles.price}>
                  ₹
                  <CountUp end={item.price} duration={2} />
                </span>
                <span data-aos="fade-down-right">
                  <strike className={styles.discount}>
                    ₹{item.rating.count}
                  </strike>
                </span>
                <span
                  data-aos="fade-down-right"
                  className={styles.disPercentage}
                >
                  {Math.round(
                    ((item.rating.count - item.price) / item.price) * 20
                  )}
                  % off
                </span>
                <span data-aos="fade-down-right" className={styles.rating}>
                  {item.rating.rate}
                  <span className={styles.star}>
                    <AiFillStar />
                  </span>
                </span>
                <span data-aos="fade-down-right" className={styles.rate}>
                  {Math.round(Math.random() * 5000)}
                  <span style={{ margin: "0 5px 0 5px" }}>Rating</span>&
                  <span style={{ margin: "0 5px 0 5px" }}>Reviews</span>
                  <span>{Math.round(Math.random() * 1000)}</span>
                </span>

                <div data-aos="zoom-in-up">
                  <button className={styles.buyNow} onClick={verify}>
                    <Link
                      style={{ color: "#fff" }}
                      to={
                        window.localStorage.getItem("userName")
                          ? "/deliver"
                          : "/login"
                      }
                      state={item}
                    >
                      BUY NOW
                    </Link>
                  </button>
                  {window.localStorage.getItem("userName") ? (
                    store.filter(fg => fg.id === item.id).length === 1 ? (
                      <button className={styles.goTocart}>
                        <Link to="/cart">GO TO CART</Link>
                      </button>
                    ) : (
                      <Link
                        to=""
                        onClick={() => {
                          setStore([...store, item]);
                          setCount([...count, { id: item.id, count: 1 }]);
                          Notification();
                          Setsep(!sep);
                        }}
                      >
                        <button className={styles.addTocart}>
                          ADD TO CART
                        </button>
                      </Link>
                    )
                  ) : (
                    <Link to="/login" onClick={verify}>
                      <button className={styles.addTocart}>ADD TO CART</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Item;
