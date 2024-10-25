import Image from "next/image";
import CategoryPage from "./category/page";
import MenuPage from "./menu/[drink]/page";
import DrinkPage from "./drink/page";
import PaymentPage from "./payment/page";

export default function Home() {
  return (
      <main className="min-h-screen w-full px-[40px] py-3">
        {/* <PaymentPage/> */}
        {/* <DrinkPage/> */}
        {/* <MenuPage/> */}
        <CategoryPage/>
      </main>
  );
}
