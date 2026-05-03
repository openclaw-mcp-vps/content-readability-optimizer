import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Readability Optimizer',
  description: 'Optimize content for target reading levels with real-time readability scoring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fe29c317-eca6-4229-b5be-319478c48972"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
