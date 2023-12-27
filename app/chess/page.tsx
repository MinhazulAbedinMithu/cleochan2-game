import Chess from "@/components/categories/Chess/Chess";
import Electronic from "@/components/categories/Electronic/Electronic";
import React from "react";

export default function ChessPage() {
  return (
    <main className="flex flex-col items-center justify-between pt-[70px] overflow-hidden">
      <Chess />
    </main>
  );
}
