import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTruckPickup } from "react-icons/fa";
import styles from "./success.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";


const Success = () => {
  let { state } = useLocation();
  // let [date, setDate] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);
  // ! fetching Tomorrow Date:
  let a = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let tommorow = a.getDay() + 1;
  // setDate(days[tommorow]);
  return (
    <section data-aos="zoom-in-right" className={styles.successParent}>
      {state.map((li, val) => {
        return (
          <div key={val} className={styles.MainsuccessBlock}>
            <div className={styles.successBlock}>
              <div className={styles.div1}>
                <img src={li.image} />
              </div>
              <div className={styles.div2}>
                <b>{li.title}</b>
                <br />
                <br />
                <span>{li.description}</span>
              </div>
            </div>
            <div className={styles.address}>
              <div>
                <b>{li.ename}</b>
                <p>{li.email}</p>
                <span>{li.address}</span>
                <p>{li.phone_no}</p>
                <b>{li.pinCode}</b>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.successBlock2}>
        <div>
          <span className={styles.van}>
            <FaTruckPickup />
          </span>
          <span>Delivery Excepted By Tomorrow </span>
        </div>
        <div>
          <b data-aos="fade-left">
            ₹<CountUp end={state[0].price} duration={2} />
          </b>
        </div>
      </div>
      {/* <span className={styles.change}>
        <Link to="/deliver">Change</Link>
      </span> */}
    </section>
  );
};

export default Success;
