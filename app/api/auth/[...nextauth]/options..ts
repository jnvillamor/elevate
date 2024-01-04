import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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
        return await signInWithEmailAndPassword(auth, (credentials as any).email, (credentials as any).password)
          .then(userCredential => {
            if (userCredential.user)
              return userCredential.user;
            return null;
          })
          .catch( error => console.log(error))
      }
    })
  ],
  pages: {
    signIn: "/login",
  }
}