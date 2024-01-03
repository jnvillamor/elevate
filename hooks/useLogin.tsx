import { UserAuth } from '@/contexts/AuthContext'
import { useEffect, useState } from 'react'

const useLogin = () => {
  const [loading, setLoading] = useState(true)

  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleSignOut = async () => {
    try { 
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthentication();
  }, [user])
}

export default useLogin