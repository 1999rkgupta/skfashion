import { createContext, useState } from "react";

export const PostContext = createContext();
export const PostContextProvider = ({ children }) => {
  let [count, setCount] = useState([]);
  let [store, setStore] = useState([]);
  let [wishlist, setWishlist] = useState([]);
  let [item, setItem] = useState(null);
  let [wishListTrail, setWishListTrail] = useState([]);
  let [sep, Setsep] = useState(false);
  let [deliver, setDeliver] = useState(null);
  let [filter, setFilter] = useState(null);
  let [totall, setTotal] = useState(null);
  let [totalD, setTotalDis] = useState(null);
  let [din, setDin] = useState(null);
  let [mah, setMah] = useState(null);
  let [day, setDay] = useState(null);
  let [button, setButton] = useState(true);

  return (
    <PostContext.Provider
      value={{
        day,
        setDay,
        store,
        setStore,
        setCount,
        count,
        wishlist,
        setWishlist,
        setItem,
        item,
        setWishListTrail,
        wishListTrail,
        Setsep,
        sep,
        deliver,
        setDeliver,
        filter,
        setFilter,
        totall,
        setTotal,
        totalD,
        setTotalDis,
        din,
        setDin,
        mah,
        setMah,
        button,
        setButton,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
