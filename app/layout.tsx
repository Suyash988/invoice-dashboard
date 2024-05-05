import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Khaata Dashboard',
    default: 'Khaata Dashboard',
  },
  description: 'This is a inovice project developed by Suyash Agnihotri, using the Next.js, PostgreSQL, and Vercel.',
  metadataBase: new URL('https://khaatadashboard.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
