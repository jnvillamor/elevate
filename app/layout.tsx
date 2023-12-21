import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elevate',
  description: 'Startup Mapping Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
