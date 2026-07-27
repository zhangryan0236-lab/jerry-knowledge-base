import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '复盘军师',
  description: "Jerry's private review adviser",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
    >
      <head />
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
