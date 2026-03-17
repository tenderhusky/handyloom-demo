import './globals.css'

export const metadata = {
  title: 'TenderHusky Demo Store',
  description: 'High-Fidelity AI Commerce Infrastructure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505]">{children}</body>
    </html>
  )
}
