import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '~/components/Header'
import { Sidebar } from '~/components/Sidebar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900">
        <Sidebar />
        <div className="ml-80 relative h-screen">
          <Header />
          <div className="py-24 px-8 max-w-4xl mx-auto">{children}</div>
        </div>
      </body>
    </html>
  )
}
