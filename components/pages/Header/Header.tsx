import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className='py-6 px-16 bg-neutrals-950 flex justify-between items-center sticky top-0'>
      <nav className='flex gap-2'>
        <Link href='/'>
          <Image src='/logo.svg' alt='Logo' width={45} height={48} />
        </Link>
        <Image src='/logo-letter.svg' alt='Logo' width={150} height={46} />
      </nav>
      <NavLinks />
    </header>
  );
};

export default Header;
