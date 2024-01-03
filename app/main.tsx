'use client';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {AuthContextProvider} from '@/contexts/AuthContext';

const Main = ({ children } : { children: React.ReactNode}) => {
  return (
    <AuthContextProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </AuthContextProvider>
  )
}

export default Main