// app/layout.tsx (if using App Router)
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import "../app/globals.css"
import Navbar from './components/constant/Navbar/Navbar'

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}