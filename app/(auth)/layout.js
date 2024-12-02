export const metadata = {
  title: 'Your Page Title',
  description: 'Page description',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
