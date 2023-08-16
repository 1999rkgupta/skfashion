import React, { useState, useEffect, useContext } from "react";
import styles from "./deliver.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PostContext } from "../../context/ContextApi";
import { Link, useLocation } from "react-router-dom";
import skLogo from "../../asset/skFashionLogo.png";
import { toast } from "react-toastify";

const Deliver = () => {
  let { state } = useLocation();
  console.log(state);
  let { deliver, setDeliver, store } = useContext(PostContext);
  // console.log(store);
  let [add, setAdd] = useState([
    {
      id: 0,
      ename: "Rashid",
      phone_no: "9534610543",
      email: "lumiarashid5200@gmail.com",
      pinCode: 800056,
      address: "HSR Layout 3rd cross Banglore",
    },
    {
      id: 1,
      ename: "Harish",
      phone_no: "9534610544",
      email: "harish512@gmail.com",
      pinCode: 800050,
      address: "Banshankari Banglore",
    },
    {
      id: 2,
      ename: "Saquib",
      phone_no: "9534610593",
      email: "saquib22@gmail.com",
      pinCode: 800046,
      address: "Daulatpur Ara Bhojpur",
    },
    {
      id: 3,
      ename: "Asif",
      phone_no: "9534610243",
      email: "asif10@gmail.com",
      pinCode: 802301,
      address: "Milki Mohallah Ara",
    },
  ]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.deliBlock} data-aos="zoom-in-right">
      <div className={styles.delivAd}>
        <span className={styles.logo}>
          <Link to="/">
            <i style={{ fontSize: "22px", color: "#fff", marginRight: "4em" }}>
              Sk Fashion
            </i>
          </Link>
        </span>
        <h2>DELIVERY ADDRESS</h2>
      </div>
      <div>
        {add.map((val, ind) => {
          return (
            <div key={ind} className={styles.address}>
              <div
                id="adress"
                value={deliver}
                onChange={e => setDeliver(e.target.value)}
              >
                <input type="radio" name="adress" value={val.id} />
                <h4>{val.ename}</h4>
                <b>{val.phone_no}</b>
                <strong>{val.email}</strong>
              </div>
              <div style={{ marginLeft: "55px" }}>
                <span>{val.address}</span>
                <sapn style={{ marginTop: "4px", fontWeight: "600" }}>
                  {val.pinCode}
                </sapn>
              </div>

              {deliver == val.id ? (
                <button className={styles.deliverHere} data-aos="zoom-in-left">
                  <Link
                    state={state ? [state, val] : [store, val, { pos: true }]}
                    to="/success"
                    style={{ color: "#fff" }}
                    onClick={() =>
                      toast.success(`Successfully order confirmed`)
                    }
                  >
                    DELIVER HERE
                  </Link>
                </button>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deliver;
