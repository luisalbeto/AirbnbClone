import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'AirbnbClone',
}

const font = Nunito ({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal isOpen
        title='Hello'/>
        <Navbar/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
