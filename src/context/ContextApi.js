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

  return (
    <PostContext.Provider
      value={{
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
