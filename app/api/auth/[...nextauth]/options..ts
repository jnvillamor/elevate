import { auth } from "@/firebase";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text"},
        password: { label: "Password", type: "password"}
      },
      async authorize(credentials): Promise<any> {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, (credentials as any).email, (credentials as any).password);

          return Promise.resolve(userCredential.user);
        }
        catch( error: any ) {
          if( error.code === 'auth/invalid-credential') {
            error.message = "Invalid email or password";
            throw error;
          } else {
            error.message = "Something went wrong";
            throw error;
          }
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    newUser: "/onboarding"
  }
}