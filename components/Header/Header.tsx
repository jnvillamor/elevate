import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <nav className='py-6 px-16 bg-neutrals-950 flex justify-between items-center'>
      <div className='flex gap-2'>
        <Link href='/'>
          <Image src='/logo.svg' alt='Logo' width={51} height={48} />
        </Link>
        <Image src='/logo-letter.svg' alt='Logo' width={200} height={46} />
      </div>
      <NavLinks />
    </nav>
  );
};

export default Header;
