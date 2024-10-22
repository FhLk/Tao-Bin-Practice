import Image from "next/image";
import CategoryPage from "./view/category/page";
import MenuPage from "./view/menu/page";
import DrinkPage from "./view/drink/page";

export default function Home() {
  return (
      <main className="min-h-screen w-full px-[40px] py-3">
        <DrinkPage/>
        {/* <MenuPage/> */}
        {/* <CategoryPage/> */}
      </main>
  );
}
