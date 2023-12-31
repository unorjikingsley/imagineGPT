import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'imagineGPT',
//   description:
//     'imagineGPT: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
