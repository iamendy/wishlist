import Navbar from "@/components/Navbar";
import AllWishList from "@/components/AllWishList";
import NewWishList from "@/components/NewWishList";
import useGetUserId from "@/hooks/useGetUserId";
import { useState, useEffect } from "react";
import { WishProvider } from "@/context/wishListContext";

export default function Home() {
  return (
    <div className="max-w-4xl min-h-screen">
      <WishProvider>
        <Navbar />
        <NewWishList />
        <AllWishList />
      </WishProvider>
    </div>
  );
}
