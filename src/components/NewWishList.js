import { useState } from "react";
import { useContext } from "react";
import WishContext from "@/context/wishListContext";
import useGetUserId from "@/hooks/useGetUserId";

const NewWishList = () => {
  const [title, setTitle] = useState("");
  const [titleLink, setTitleLink] = useState("");
  const [isLoading, setIsLoading] = useState();
  const { userId } = useGetUserId();
  const { updateList } = useContext(WishContext);

  const handleNewWish = async () => {
    setIsLoading(true);
    const res = await fetch("/api/create-new", {
      method: "POST",
      body: JSON.stringify({ title, titleLink, userId }),
    });
    setTitle("");
    setTitleLink("");
    const data = await res.json();
    updateList(data.wish);
    setIsLoading(false);
  };

  return (
    <div className="p-3 mt-9 flex flex-col space-y-4 justify-center border-2 border-red-400 ">
      <div className="p-2">
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="p-2">
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="https://"
          onChange={(e) => setTitleLink(e.target.value)}
          value={titleLink}
        />
      </div>

      <div className="flex justify-center">
        <button
          disabled={isLoading}
          className="bg-blue-400 w-fit px-7 py-2 rounded-lg disabled:bg-gray-700"
          onClick={() => handleNewWish()}
        >
          {isLoading ? "Saving.." : "Save"}
        </button>
      </div>
    </div>
  );
};
export default NewWishList;
