import '../styles/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
      <script 
        src="https://cdn2.woxo.tech/a.js#63b9fae1a4e91f8c9a8d206a" 
        async data-usrc>
      </script>
    </html>
  )
}
