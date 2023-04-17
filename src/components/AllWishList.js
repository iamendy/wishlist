import EditModal from "./EditModal";
import { useState, useEffect } from "react";
import Wish from "./Wish";
import { useContext } from "react";
import WishContext from "@/context/wishListContext";
import useGetUserId from "@/hooks/useGetUserId";

const AllWishList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { list, initializeList } = useContext(WishContext);

  const { userId } = useGetUserId();

  useEffect(() => {
    getUserWishes();
  }, []);

  const getUserWishes = async () => {
    const res = await fetch(`/api/get-wishes?user=9`);
    const data = await res.json();
    initializeList(data?.list);
  };

  return (
    <div className="mt-5 space-y-3">
      {list && list.length > 0 ? (
        list.map((wish) => (
          <Wish key={wish.id} wish={wish} setIsOpen={setIsOpen} />
        ))
      ) : (
        <p>No Wishlist</p>
      )}

      <EditModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
export default AllWishList;
