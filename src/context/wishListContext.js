import { createContext, useState, useEffect } from "react";
import useGetUserId from "@/hooks/useGetUserId";

const WishContext = createContext();

export function WishProvider({ children }) {
  const [list, setList] = useState([]);
  //for editing a single entry
  const [wish, setWish] = useState({});

  const initializeList = (list) => {
    setList([...list]);
  };

  const updateList = (newList) => {
    setList([newList, ...list]);
  };

  const deleteFromList = (id) => {
    setList((list) => list.filter((l) => l.id !== id));
  };

  return (
    <WishContext.Provider
      value={{
        list,
        initializeList,
        updateList,
        deleteFromList,
        wish,
        setWish,
      }}
    >
      {children}
    </WishContext.Provider>
  );
}
export default WishContext;
