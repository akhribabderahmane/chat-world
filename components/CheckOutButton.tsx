'use client'
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useState } from "react";
const CheckOutButton = () => {
  const {data:session}=useSession();
  const [loading, setLoading] = useState<boolean>(false)

  const createCheckoutSession=async ()=>{
    // push a document into firebase db
    if(!session?.user?.id) return;
    // stripe extention willl create a checkout session
     setLoading(true)
     const docRef=await addDoc(collection(db,'customers',session.user.id,'checkout_session'),{
      price:'',
      seccess_url:window.location.origin,
      cancel_url:window.location.origin
     })
    // redirect user to checkout page
  }
  return (
    <div className="flex flex-col space-y-2">
    
    <button className='w-full bg-indigo-600 text-white py-2 font-semibold  hover:opacity-80 rounded-lg '>Sign Up</button>
    </div>
  )
}

export default CheckOutButton