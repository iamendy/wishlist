import Navbar from "@/components/Navbar";
import AllWishList from "@/components/AllWishList";
import NewWishList from "@/components/NewWishList";
import useGetUserId from "@/hooks/useGetUserId";
import { useState, useEffect } from "react";

export default function Home() {
  const { userId } = useGetUserId();
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserWishes();
  }, []);

  const getUserWishes = async () => {
    const res = await fetch(`/api/get-wishes?user=9`);
    const data = await res.json();
    setList([...data.list]);
  };

  const updateList = (newList) => {
    setList([newList, ...list]);
  };

  return (
    <div className="max-w-4xl min-h-screen">
      <Navbar />
      <NewWishList userId={userId} updateList={updateList} />
      <AllWishList list={list} />
    </div>
  );
}
