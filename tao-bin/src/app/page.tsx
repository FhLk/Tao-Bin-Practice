import Image from "next/image";
import CategoryPage from "./view/category/page";

export default function Home() {
  return (
      <main className="min-h-screen w-full">
        <CategoryPage/>
      </main>
  );
}
