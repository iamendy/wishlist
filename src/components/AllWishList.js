import EditModal from "./EditModal";
import { useState } from "react";
import Wish from "./Wish";

const AllWishList = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWish, setSelectedWish] = useState({});

  const selectEdit = (id) => {
    setIsOpen(true);
    const wish = list.filter((l) => l.id == id);
    setSelectedWish(...wish);
  };

  return (
    <div className="mt-5 space-y-3">
      {list && list.length > 0 ? (
        list.map((wish) => (
          <Wish
            key={wish.id}
            wish={wish}
            setIsOpen={() => setIsOpen(true)}
            selectEdit={selectEdit}
          />
        ))
      ) : (
        <p>No Wishlist</p>
      )}

      <EditModal isOpen={isOpen} setIsOpen={setIsOpen} wish={selectedWish} />
    </div>
  );
};
export default AllWishList;
