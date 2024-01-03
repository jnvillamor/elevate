import type { Metadata } from 'next';
import './globals.css';
import Main from './main';

export const metadata: Metadata = {
  title: 'Elevate',
  description: 'Startup Mapping Tool'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Main >
          {children}
        </Main>
      </body>
    </html>
  );
}
