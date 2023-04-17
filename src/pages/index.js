import Navbar from "@/components/Navbar";
import AllWishList from "@/components/AllWishList";
import NewWishList from "@/components/NewWishList";
import { WishProvider } from "@/context/wishListContext";

export default function Home() {
  return (
    <div className="max-w-4xl min-h-screen mx-auto">
      <WishProvider>
        <Navbar />
        <NewWishList />
        <AllWishList />
      </WishProvider>
    </div>
  );
}
