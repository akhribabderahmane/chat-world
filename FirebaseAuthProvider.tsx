"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "./firebase";

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {data:session} = useSession()
  useEffect(() => {
    if(!session) return ;
    syncFirebaseAuth(session)
  }, [session]);
  return <>{children}</>;
};

export default FirebaseAuthProvider;
async function syncFirebaseAuth(session: Session) {
    if(session && session.firebaseToken){
        try {
            await signInWithCustomToken(auth,session.firebaseToken,)  
        } catch (error) {
           console.error('error sign in with custom token:',error)  
        }
    }
}

