import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interlinear - Educational Technology Company.',
  description: 'Our mission is to ensure children arent left behind in the AI revolution by creating learning tools that make this technology accessible and effective for everyone.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'