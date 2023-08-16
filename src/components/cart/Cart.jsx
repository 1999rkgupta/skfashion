import React, { useState } from "react";
import { useContext } from "react";
import { PostContext } from "../../context/ContextApi";
import styles from "./cart.module.css";
import emptyCart from "../../asset/empty-cart.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  let [state, setState] = useState(null);
  let {
    store,
    setStore,
    setCount,
    setItem,
    count,
    totall,
    setTotal,
    totalD,
    setTotalDis,
  } = useContext(PostContext);
  console.log(store);

  // !Remove:
  let Remove = id => {
    let list = [...store];
    list.splice(id, 1);
    console.log(list);
    setStore(list);
  };

  // !seprate data:
  let fetchItem = async id => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(data);
  };

  // !total Price:

  let total = null;

  for (let i = 0; i < store.length; i++) {
    total =
      total +
      store[i].price * count.filter(ef => ef.id === store[i].id)[0].count;
  }
  setTotal(Math.round(total));

  // !total Discount:
  let dis = null;

  for (let i = 0; i < store.length; i++) {
    dis +=
      store[i].rating.count *
      count.filter(ef => ef.id === store[i].id)[0].count;
  }
  setTotalDis(Math.round(dis));
  // console.log(totalD);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.cartBlock} data-aos="zoom-in-down">
      <div>
        <div>
          {store.length > 0 ? (
            store.map((li, iid) => {
              let { image, title, price, rating, id } = li;
              return (
                <article>
                  <div className={styles.div1} key={iid}>
                    <Link to="/item" onClick={() => fetchItem(id)}>
                      <img src={image} alt="" />
                    </Link>
                    <div>
                      <Link to="/item" onClick={() => fetchItem(id)}>
                        <p style={{ fontSize: "20px" }}>{title.slice(0, 45)}</p>
                      </Link>

                      <p>
                        <strike
                          style={{
                            fontSize: "17px",
                            color: "grey",
                            marginRight: "10px",
                          }}
                        >
                          ₹
                          {rating.count *
                            count.filter(efg => efg.id === li.id)[0].count}
                        </strike>
                        <b
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          ₹
                          {Math.round(
                            price *
                              count.filter(efg => efg.id === li.id)[0].count
                          )}
                        </b>
                        <span
                          style={{
                            color: "#388e3c",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {Math.round(((rating.count - price) / price) * 20)}%
                          off
                        </span>
                      </p>
                      <p>
                        <button
                          disabled={
                            count.filter(efg => efg.id === li.id)[0].count < 2
                              ? true
                              : false
                          }
                          onClick={() => {
                            let list = [...count];

                            let count1 = list.filter(efg => efg.id === li.id)[0]
                              .count;
                            let newData = list.filter(ef => ef.id !== li.id);

                            let newList = { id: li.id, count: count1 - 1 };
                            setCount([...newData, newList]);
                          }}
                        >
                          --
                        </button>
                        <span className={styles.count}>
                          {" "}
                          {count.filter(fg => fg.id === li.id)[0].count}
                        </span>
                        <button
                          onClick={() => {
                            let list = [...count];

                            let count1 = list.filter(efg => efg.id === li.id)[0]
                              .count;
                            let newData = list.filter(ef => ef.id !== li.id);

                            let newList = { id: li.id, count: count1 + 1 };
                            setCount([...newData, newList]);
                          }}
                        >
                          +
                        </button>

                        <span
                          className={styles.remove}
                          onClick={() => Remove(iid)}
                        >
                          Remove
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <span className={styles.emptyCart}>
              <img src={emptyCart} alt="image2" />
            </span>
          )}
        </div>
        <div>
          {store.length > 0 ? (
            <div className={styles.priceDetails}>
              <div>
                <p
                  style={{
                    marginBottom: "20px",
                    color: "#878787",
                    fontSize: "20px",
                  }}
                >
                  PRICE DETAILS
                  <p style={{ fontSize: "18px", color: "#878787" }}>
                    --------------------------------------------------------------------------------
                  </p>
                </p>
              </div>
              <div>
                <p className={styles.productDetails}>
                  <span>Price ({store.length}items)</span>

                  <span>₹{totall + totalD}</span>
                </p>
                <p className={styles.productDetails}>
                  <span>Discount</span>
                  <span style={{ color: "#388e3c" }}>-₹{totalD}</span>
                </p>
                <p className={styles.productDetails}>
                  <span>Delivery Charge</span>
                  <span style={{ color: "#388e3c" }}>free</span>
                </p>
                <p style={{ fontSize: "18px", color: "#878787" }}>
                  --------------------------------------------------------------------------------
                </p>
                <p className={styles.productDetails}>
                  <h3 style={{ fontWeight: "500" }}>
                    Total Amount Total Amount{" "}
                  </h3>
                  <span>₹{totall}</span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {store ? (
            <Link className={styles.placeOrder} to="/deliver">
              <button>Place Order</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
