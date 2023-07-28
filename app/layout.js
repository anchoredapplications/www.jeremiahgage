export const metadata = {
  title: 'Jeremiah Gage',
  description: 'Human, creator, engineer',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
