import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Freedom Calculator',
  description: 'Calculadora para execução penal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={poppins.variable}
    >
      <body>{children}</body>
    </html>
  )
}
