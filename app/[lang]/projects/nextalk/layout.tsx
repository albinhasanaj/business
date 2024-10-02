export const metadata = {
  title: 'NexTalk Demo',
  description: 'This is a preview of NexTalk, an application for connecting with friends through live chat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
