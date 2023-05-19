"use client";
import { SessionProvider } from "next-auth/react";
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import toast, { Toaster } from 'react-hot-toast';
import LoginModal from "./components/modals/LoginModal";

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <RegisterModal />
          <LoginModal />
          <Toaster />
          <Navbar />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  )
}



