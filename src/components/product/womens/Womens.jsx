import React, { useContext, useEffect, useState } from "react";
import styles from "./womens.module.css";
import axios from "axios";
import { PostContext } from "../../../context/ContextApi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import Spinner from "../../spinner/Spinner";
import { pink } from "@mui/material/colors";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Womens = () => {
  let [state, setState] = useState(null);
  const {
    store,
    setStore,

    setItem,
    count,
    setCount,
    Setsep,
    sep,
    setBuy,
    wishlist,
    setWishlist,
    setWishListTrail,
    wishListTrail,
  } = useContext(PostContext);

  useEffect(() => {
    AOS.init();
  }, []);

  // !Notification:
  let Notification = () => {
    toast.success(`Successfully Added to cart`);
  };

  // !fetching all data.
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      let arr = [];
      arr.push(data[14], data[15], data[16], data[17], data[18], data[19]);
      setState(arr);
    };
    fetchData();
  }, []);

  let fetchItem = async id => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(data);
  };

  // !
  let verify = () => {
    if (!window.localStorage.getItem("userName")) {
      toast.success(`please login first`);
    }
  };

  // !wishlist:
  let handleOnChange = e => {
    let { value, checked } = e.target;
    console.log("value", value);
    if (checked) {
      setWishListTrail([...wishListTrail, Number.parseInt(value)]);
    } else {
      setWishListTrail(wishListTrail.filter(e => e != value));
    }
  };

  return (
    <section
      id="cardBlock"
      className={styles.cardBlock}
      data-aos="zoom-in-right"
    >
      <article>
        {state === null ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          state.map((val, ind) => {
            return (
              <div key={ind} data-aos="flip-left">
                {/* <Link
                  onClick={() => {
                    setWishlist([...wishlist, val]);
                  }}
                > */}
                <span className={styles.whishList}>
                  <Checkbox
                    value={val.id}
                    onChange={handleOnChange}
                    onClick={ef => {
                      if (ef.target.checked) {
                        setWishlist([...wishlist, val]);
                        toast.success(`Successfully Added to wishlist`);
                      } else {
                        setWishlist(wishlist.filter(e => e.id != val.id));
                        toast.success(`Successfully Removed from wishlist`);
                      }
                    }}
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    sx={{
                      color: "gray",
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                </span>
                {/* </Link> */}
                <Link onClick={() => fetchItem(val.id)} to="/item">
                  <img src={val.image} alt="image1" />
                </Link>
                <p data-aos="zoom-in-up">{val.title.slice(0, 15)}</p>
                <b data-aos="zoom-in-up">
                  ₹<CountUp end={val.price} duration={3} />
                </b>
                <span
                  data-aos="zoom-in-up"
                  style={{ color: "grey", marginLeft: "10px" }}
                >
                  <strike>₹{val.rating.count}</strike>
                </span>
                <div
                  data-aos="zoom-in-up"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px",
                  }}
                >
                  <button className={styles.womensSectionBuy} onClick={verify}>
                    <Link
                      style={{ color: "#fff" }}
                      to={
                        window.localStorage.getItem("userName")
                          ? "/deliver"
                          : "/login"
                      }
                      state={val}
                    >
                      BUY NOW
                    </Link>
                  </button>
                  {window.localStorage.getItem("userName") ? (
                    store.filter(fg => fg.id === val.id).length === 1 ? (
                      <Link style={{ color: "#fff" }} to="/cart">
                        <button className={styles.womenGotoCartMens}>
                          GO TO CART
                        </button>
                      </Link>
                    ) : (
                      <Link
                        to=""
                        onClick={() => {
                          setStore([...store, val]);
                          setCount([...count, { id: val.id, count: 1 }]);
                          Notification();
                          Setsep(!sep);
                        }}
                      >
                        <button className={styles.addTocartWomens}>
                          ADD TO CART
                        </button>
                      </Link>
                    )
                  ) : (
                    <Link to="/login" onClick={verify}>
                      <button className={styles.addTocartWomens}>
                        ADD TO CART
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })
        )}
      </article>
    </section>
  );
};

export default Womens;
