
import { SessionProvider } from "next-auth/react";
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import toast, { Toaster } from 'react-hot-toast';
import LoginModal from "./components/modals/LoginModal";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getCurrentUser from "./components/actions/getCurrentUser";
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Umenu",
  description: "Order with us",
};

export default async function RootLayout({
  children,

}: {
  children: React.ReactNode;

}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <LoginModal />
        <Toaster />
        <Navbar currentUser={currentUser}/>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}



