import { useState, useContext } from "react";
import WishContext from "@/context/wishListContext";

const EditModal = ({ isOpen, setIsOpen }) => {
  const { wish, setWish } = useContext(WishContext);
  console.log(wish);

  const handleEdit = (e) => {
    setWish((wish) => ({ ...wish, [e.target.name]: e.target.value }));
  };

  const updateWish = () => {
    console.log(wish);
  };

  return (
    <div
      className={`${
        isOpen ? "scale-100" : "scale-0"
      } bg-white/50 h-full w-full absolute top-1/2 
    left-1/2 -translate-x-[50%] -translate-y-[50%] transform
    flex justify-center items-center`}
    >
      <div className="relative">
        <div className="bg-black p-9">
          <div className="p-2">
            <input
              type="text"
              className="w-full p-2 rounded-lg text-black/90"
              placeholder="Enter title"
              name="title"
              value={wish.title}
              onChange={(e) => handleEdit(e)}
            />
          </div>

          <div className="p-2">
            <input
              type="text"
              className="w-full p-2 rounded-lg text-black/90"
              name="link"
              placeholder="Enter Link"
              value={wish.link}
              onChange={(e) => handleEdit(e)}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-400 w-fit px-7 py-2 rounded-lg"
              onClick={() => updateWish()}
            >
              Update
            </button>
          </div>
        </div>

        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
