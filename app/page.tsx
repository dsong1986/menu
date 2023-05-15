import Image from 'next/image'


import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home({ Component, pageProps }: AppProps) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}
  >
   
  </main>
  )
}
