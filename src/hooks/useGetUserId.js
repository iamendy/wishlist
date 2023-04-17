import { useState, useEffect } from "react";

const useGetUserId = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //generate an id
    const getId =
      localStorage.getItem("wishlistID") ??
      localStorage.setItem(
        "wishlistID",
        Math.floor(Math.random() * 10).toString()
      );

    setUserId(getId);
  }, []);
  return { userId };
};
export default useGetUserId;
