import Image from "next/image";
import CategoryPage from "./view/category/page";
import MenuPage from "./view/menu/page";
import DrinkPage from "./view/drink/page";
import PaymentPage from "./view/payment/page";

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
