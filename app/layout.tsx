'use client';

// import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { AuthContextProvider } from "./context/AuthContext";

// export const metadata: Metadata = {
//   title: 'Elevate',
//   description: 'Startup Mapping Tool'
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AuthContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
