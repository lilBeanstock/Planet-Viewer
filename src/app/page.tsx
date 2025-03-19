"use client";

import { useState } from "react";
import { Header } from "@/components/Header";

export default function Home() {
  // const [hidden, setHidden] = useState(false);
  // const handleClick = () => {
  //   setHidden((hidden) => !hidden);
  // }

  return (
    <div className="bg-black w-screen min-h-screen p-0 m-0">
      <Header classes="bg-black"></Header>
    </div>
  );
}
