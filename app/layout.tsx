import { Poppins } from "next/font/google"

import "./global.css"

const poppins = Poppins({
  weight: ["400", "700", "800"],
  subsets: ["latin-ext"],
})

export const metadata = {
  title: "Age Calculator",
  description: "Calculate your age with our advance calculator.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
