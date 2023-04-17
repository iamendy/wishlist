import EditModal from "./EditModal";
import { useState, useEffect } from "react";
import Wish from "./Wish";
import { useContext } from "react";
import WishContext from "@/context/wishListContext";
import useGetUserId from "@/hooks/useGetUserId";

const AllWishList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { list, initializeList } = useContext(WishContext);

  const { userId } = useGetUserId();

  useEffect(() => {
    getUserWishes();
  }, [userId]);

  const getUserWishes = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/get-wishes?user=${userId}`);
    const data = await res.json();

    data.list && initializeList(data?.list);
    setIsLoading(false);
  };

  if (isLoading) return <div className="text-center p-4">Fetching data..</div>;
  return (
    <div className="mt-5 space-y-3">
      {list && list.length > 0 ? (
        list.map((wish, i) => (
          <Wish key={wish.id} wish={wish} setIsOpen={setIsOpen} sn={i} />
        ))
      ) : (
        <p>No Wishlist</p>
      )}

      <EditModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
export default AllWishList;
