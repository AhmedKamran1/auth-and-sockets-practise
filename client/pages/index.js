import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import { io } from "socket.io-client";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1>Home</h1>;
}
