import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTruckPickup } from "react-icons/fa";
import styles from "./success.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";
import { PostContext } from "../../context/ContextApi";
import axios from "axios";

const Success = () => {
  let { state } = useLocation();
  let { din, setDin, mah, setMah, day, setDay, count, setItem } =
    useContext(PostContext);
  console.log(state);

  useEffect(() => {
    AOS.init();
  }, []);
  console.log(count);

  // !seprate data:
  let fetchItem = async id => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(data);
  };

  // ! fetching Tomorrow Date:
  let a = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let test = days[a.getDay() + 1];
  setDay(test);
  let mahe = months[a.getMonth()];
  let date = a.getDate() + 1;
  setDin(date);
  setMah(mahe);

  return (
    <div>
      {state[2] ? (
        state[0].map((val, li) => {
          return (
            <div key={li}>
              <div className={styles.successBlock}>
                <div className={styles.div1}>
                  <Link to="/item" onClick={() => fetchItem(val.id)}>
                    <img src={val.image} />
                  </Link>
                </div>
                <div className={styles.div2}>
                  <Link to="/item" onClick={() => fetchItem(val.id)}>
                    <b>{val.title}</b>
                  </Link>
                  <br />
                  <br />
                  <span>{val.description}</span>
                </div>
                <div className={styles.successBlock2}>
                  <div>
                    <span className={styles.van}>
                      <FaTruckPickup />
                    </span>
                    <span>
                      Delivery Excepted By Tomorrow,
                      <span style={{ marginLeft: "5px", fontWeight: "600" }}>
                        <span style={{ marginRight: "5px" }}>{day}</span>
                        {din}
                        {mah}{" "}
                      </span>
                    </span>
                  </div>
                  <div>
                    <b data-aos="fade-left">
                      ₹
                      <CountUp
                        end={
                          val.price *
                          count.filter(efg => efg.id === val.id)[0].count
                        }
                        duration={2}
                      />
                    </b>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <section data-aos="zoom-in-right" className={styles.successParent}>
          <div className={styles.MainsuccessBlock}>
            <div className={styles.successBlock}>
              <div className={styles.div1}>
                <img src={state[0].image} />
              </div>
              <div className={styles.div2}>
                <b>{state[0].title}</b>
                <br />
                <br />
                <span>{state[0].description}</span>
              </div>
            </div>
            <div className={styles.address}>
              <div>
                <b>
                  Name:
                  <span style={{ marginLeft: "5px" }}>{state[1].ename}</span>
                </b>
                <p>
                  <b>Email:</b>
                  <span style={{ marginLeft: "5px" }}>{state[1].email}</span>
                </p>
                <span>
                  <b>Address:</b>
                  <span style={{ marginLeft: "5px" }}>{state[1].address}</span>
                </span>
                <p>
                  <b>PhoneNo:</b>
                  <span style={{ marginLeft: "5px" }}>{state[1].phone_no}</span>
                </p>
                <p>
                  <b>PinCode:</b>
                  <span style={{ marginLeft: "5px" }}>{state[1].pinCode}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.successBlock2}>
            <div>
              <span className={styles.van}>
                <FaTruckPickup />
              </span>
              <span>
                Delivery Excepted By Tomorrow
                <span style={{ marginLeft: "5px", fontWeight: "600" }}>
                  {day}
                  {din}
                  {mah}{" "}
                </span>
              </span>
            </div>
            <div>
              <b>
                ₹<CountUp end={state[0].price} duration={2} />
              </b>
            </div>
          </div>
          {/* <span className={styles.change1}>
            <Link to="/deliver">Change</Link>
          </span> */}
        </section>
      )}
      {state[2] ? (
        <div className={styles.address}>
          <div>
            <b>
              Name:<span style={{ marginLeft: "5px" }}>{state[1].ename}</span>
            </b>
            <p>
              <b>Email:</b>
              <span style={{ marginLeft: "5px" }}>{state[1].email}</span>
            </p>
            <span>
              <b>Address:</b>
              <span style={{ marginLeft: "5px" }}>{state[1].address}</span>
            </span>
            <p>
              <b>PhoneNo:</b>
              <span style={{ marginLeft: "5px" }}>{state[1].phone_no}</span>
            </p>
            <p>
              <b>PinCode:</b>
              <span style={{ marginLeft: "5px" }}>{state[1].pinCode}</span>
            </p>
          </div>
          <span className={styles.change}>
            <Link to="/deliver">Change</Link>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Success;
