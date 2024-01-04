import type { Metadata } from 'next';
import './globals.css';
import SessionProvider from './SessionProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options.';

export const metadata: Metadata = {
  title: 'Elevate',
  description: 'Startup Mapping Tool'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
