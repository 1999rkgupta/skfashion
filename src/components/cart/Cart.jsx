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

const Cart = () => {
  let [state, setState] = useState(null);
  let {
    store,
    setStore,
    setCount,
    count,
    totall,
    setTotal,
    totalD,
    setTotalDis,
  } = useContext(PostContext);

  console.log(store);

  let Remove = id => {
    let list = [...store];
    list.splice(id, 1);
    console.log(list);
    setStore(list);
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
    dis += store[i].rating.count;
  }
  setTotalDis(Math.round(dis));
  // console.log(totalD);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.cartBlock} data-aos="zoom-in-down">
      <div>
        {store.length > 0 ? (
          store.map((li, id) => {
            let { image, title, price, rating } = li;
            return (
              <article>
                <div className={styles.div1} key={id}>
                  <img src={image} alt="" />
                  <div>
                    <p style={{ fontSize: "20px" }}>{title.slice(0, 45)}</p>

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
                          price * count.filter(efg => efg.id === li.id)[0].count
                        )}
                      </b>
                      <span
                        style={{
                          color: "#388e3c",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {Math.round(((rating.count - price) / price) * 20)}% off
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
                      <span>
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
                        onClick={() => Remove(id)}
                      >
                        Remove
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.priceDetails}>
                  <p>PRICE DETAILS</p>
                  <div>
                    <p>
                      Price(
                      <span> {store.length}</span>
                      items)
                      <span>₹{totall + totalD}</span>
                    </p>
                    <p>
                      Discount
                      <span>-₹{totalD}</span>
                    </p>
                    <p>Delivery Charge free</p>
                    <p>
                      Total Amount <span>{totall}</span>
                    </p>
                  </div>
                </div>
                <Link to="/deliver">
                  <button className={styles.placeOrder}>Place Order</button>
                </Link>
              </article>
            );
          })
        ) : (
          <span className={styles.emptyCart}>
            <img src={emptyCart} alt="image2" />
          </span>
        )}
      </div>
    </section>
  );
};

export default Cart;
