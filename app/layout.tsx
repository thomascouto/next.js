import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
