//Assets
import { NeueMontreal } from "@/styles/fonts";

import Image from "next/image";

async function getData() {}

// Components
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main
      className={`${NeueMontreal.className} mx-24 flex min-h-screen flex-col`}
    >
      <Header />
    </main>
  );
}
