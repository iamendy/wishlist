import { useContext } from "react";
import WishContext from "@/context/wishListContext";

const Navbar = () => {
  const { list, updateList } = useContext(WishContext);
  return (
    <div className="p-3 flex justify-between border-2 border-red-400 mx-auto">
      <h3 className="font-bold">WishList</h3>
      <span>Status: {list.length}</span>
      <span>Github</span>
    </div>
  );
};
export default Navbar;
