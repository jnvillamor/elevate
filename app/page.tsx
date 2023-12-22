import Header from '@/components/pages/HomePage/Header/Header';
import HomeContent from '@/components/pages/HomePage/HomeContent/HomeContent';
import Sidebar from '@/components/pages/HomePage/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className='max-h-screen h-screen flex flex-col'>
      <Header />
      <main className='flex max-h-full h-full'>
        <Sidebar />
        <HomeContent />
      </main>
    </div>
  );
}
