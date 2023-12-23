import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/pages/Header/Header';

export const metadata: Metadata = {
  title: 'Elevate',
  description: 'Startup Mapping Tool'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
