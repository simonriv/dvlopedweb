import "../styles/index.css"
import { Poppins } from "next/font/google"

export const metadata = {
  title: 'Dvloped',
  description: 'Dvloped agencia de desarrollo de software en colombia',
}

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800'],
  style: ['normal','italic'],
})
 
export default function RootLayout({ children }) {
 return (
   <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </head>
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
