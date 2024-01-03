import LoginForm from '@/components/pages/Login/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {  
  return (
    <div className='flex bg-neutrals-932 text-neutrals-50'>
      <div className='hidden lg:block w-5/12 h-screen'>
        <Image src='/icons/login-hero.svg' width={500} height={1000} alt='hero' className='w-full h-full'/>
      </div>
      <div className='flex flex-grow justify-center items-center'>
        <div className='w-1/2'>
          <h1 className='font-product_sans text-4xl text-center'>Log In</h1>
          <LoginForm />
          <div className='text-center'>
            <Link href='/signup' className='text-primary-600 text-xl'>Don&apos;t have an account yet?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login