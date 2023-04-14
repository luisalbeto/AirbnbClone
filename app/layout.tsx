import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';

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
        <RegisterModal/>
        <Navbar/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
