import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className='max-h-screen h-screen flex flex-col'>
      <Header />
      <main className='max-h-full h-full'>
        <Sidebar />
      </main>
    </div>
  );
}
