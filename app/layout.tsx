import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'uMenu',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div> {children}</div>
       
      </body>
    </html>
  )
}
