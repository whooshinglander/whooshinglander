import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://whooshinglander.vercel.app'),
  title: 'WhooshingLander',
  description: 'Ronald builds fast, useful internet products across finance, AI, and local discovery.',
  openGraph: {
    title: 'WhooshingLander',
    description: 'Fast-moving web products, AI tools, and local directories with real users.',
    url: 'https://whooshinglander.vercel.app',
    siteName: 'WhooshingLander',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhooshingLander',
    description: 'Fast-moving web products, AI tools, and local directories with real users.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
