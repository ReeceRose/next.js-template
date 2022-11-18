import '@/styles/dist.css';

import SEO from '@/ui/SEO';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <SEO title="CHANGE_ME" description="CHANGE_ME" />
      <body>{children}</body>
    </html>
  );
}
