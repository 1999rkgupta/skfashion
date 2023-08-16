import React, { useState, useContext } from "react";
import styles from "./nav.module.css";
import skLogo from "../../asset/skFashionLogo.png";
import { BsHandbag } from "react-icons/bs";
import { MdPermIdentity } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { PostContext } from "../../context/ContextApi";
import { CgProfile } from "react-icons/cg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NavBar = () => {
  let [state, setState] = useState(true);
  let { store } = useContext(PostContext);
  let [profile, setProfile] = useState(false);
  let [input, setInput] = useState(false);
  let [inpVal, setInpVal] = useState("");

  let { filter, setFilter } = useContext(PostContext);

  setFilter(inpVal);
  let verify = () => {
    if (!window.localStorage.getItem("userName")) {
      toast.success(`please login first`);
    }
  };
  return (
    <section className={styles.NavBarBlock} id="navbarBlock">
      <article>
        <div className={styles.div1}>
          <Link to="/">
            <img src={skLogo} alt="LOGO" style={{ height: "60px" }} />
            <i style={{ fontSize: "22px", color: "#fff", marginRight: "4em" }}>
              Sk Fashion
            </i>
          </Link>
        </div>
        <div id="div2" className={styles.div2}>
          <ul>
            <NavLink activeClassName={styles.active} to="/mens">
              <li>MENS</li>
            </NavLink>
            <NavLink activeClassName={styles.active} to="womens">
              <li>WOMENS</li>
            </NavLink>
            <NavLink activeClassName={styles.active} to="electronic">
              <li>ELECTRONICS</li>
            </NavLink>
            <NavLink activeClassName={styles.active} to="grocery">
              <li>GROCERY</li>
            </NavLink>
          </ul>
        </div>
        <div className={styles.div3}>
          {input ? (
            <span className={styles.searchInp} data-aos="zoom-in-down">
              <input
                type="text"
                name="inpVal"
                value={inpVal}
                onChange={e => setInpVal(e.target.value)}
                placeholder="Search here products & More"
              />
            </span>
          ) : (
            ""
          )}
          <span
            id="search"
            style={{
              margin: "8px 8px 0 0",
              fontSize: "25px",
              cursor: "pointer",
              zIndex: "1",
            }}
          >
            <BiSearch onClick={() => setInput(true)} />
          </span>
          <Link
            onClick={verify}
            to={window.localStorage.getItem("userName") ? "/cart" : "/login"}
            style={{ position: "relative" }}
          >
            <p
              style={{
                position: "absolute",
                fontSize: "12px",
                top: "15px",
                right: "-5px",
                color: "#fff",
                padding: "4px",
                borderRadius: "100%",
                backgroundColor: "red",
              }}
            >
              <strong>{store.length}</strong>
            </p>
            <span
              style={{ margin: "5px", fontSize: "20px", cursor: "pointer" }}
            >
              <BsHandbag />
            </span>
          </Link>
          <Link
            onClick={verify}
            to={
              window.localStorage.getItem("userName") ? "/whishlist" : "/login"
            }
          >
            <span
              style={{ margin: "5px", fontSize: "20px", cursor: "pointer" }}
            >
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </span>
          </Link>
          {window.localStorage.getItem("userName") ? (
            <strong
              className={styles.identity}
              style={{
                color: "blue",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => setProfile(!profile)}
            >
              {window.localStorage.getItem("userName").slice(0, 6)}
              <span style={{ position: "absolute", fontSize: "18px" }}>
                <MdPermIdentity />
              </span>

              {profile ? (
                <ul data-aos="zoom-in-down" className={styles.profileList}>
                  <span style={{ fontSize: "28px" }}>
                    <CgProfile />
                  </span>
                  <li>{window.localStorage.getItem("userName")}</li>
                  <li>{window.localStorage.getItem("email")}</li>
                  <button
                    onClick={() => window.localStorage.clear()}
                    className={styles.logoutBtn}
                  >
                    Logout
                  </button>
                </ul>
              ) : (
                ""
              )}
            </strong>
          ) : (
            <Link to="/login">
              <span
                style={{ margin: "5px", fontSize: "22px", cursor: "pointer" }}
              >
                <MdPermIdentity />
              </span>
            </Link>
          )}
          <span
            id="menu"
            className={styles.menu}
            style={{ margin: "5px", fontSize: "22px", cursor: "pointer" }}
          >
            {state ? (
              <BiMenu onClick={() => setState(!state)} />
            ) : (
              <RxCross2
                onClick={() => setState(!state)}
                style={{ color: "crimson" }}
              />
            )}
            {state ? (
              ""
            ) : (
              <ul>
                <li>MENS</li>
                <li>WOMENS</li>
                <li>ELECTRONICS</li>
                <li>GROCERY</li>
              </ul>
            )}
          </span>
        </div>
      </article>
    </section>
  );
};

export default NavBar;
