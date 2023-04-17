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

  //removes existing entry with updated new key
  const updateList = (newList) => {
    let cleanedList = list.filter((l) => l.id !== newList.id);
    setList([newList, ...cleanedList]);
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
