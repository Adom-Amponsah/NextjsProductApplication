import CartPage from "@/components/Cart";
import ProductPage from "@/components/ProductPage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CartPage />

    </main>
  );
}
