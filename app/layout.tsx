import '../styles/globals.css'
import type { ReactNode } from 'react'
import { Roboto_Condensed, Open_Sans } from 'next/font/google';
const robotoCondensed = Roboto_Condensed({ weight: ['400', '700'], subsets: ['latin']})
const openSans = Open_Sans({ weight: ['400', '600', '700'], subsets: ['latin']})
export const metadata = {
  title: 'Being Accountable',
  description: 'Ordem do Dia - Site'
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}