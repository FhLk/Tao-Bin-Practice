"use client"
import Image from "next/image";
import CategoryPage from "./category/page";
import MenuPage from "./menu/[drink]/page";
import DrinkPage from "./drink/page";
import PaymentPage from "./payment/page";
import { DataProvider } from "./DataContext";

export default function Home() {
  return (
    <main className="w-full px-[40px] py-3"> 
        <CategoryPage/>
    </main>
  );
}
