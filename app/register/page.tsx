import React from 'react'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/auth'
import PricingCards from '@/components/PricingCards'
const Register =async () => {
  const session=await getServerSession(authOptions)
  return (
    <div>
        <div>
            <p className=' text-4xl font-bold text-center mt-10 mx-4 lg:mx-6'>Lets Handle your membership {session?.user?.name?.split(' ')[0]} !!</p>
        </div>
        <div className="mt-10">
          <PricingCards redirect={false}/>
        </div>
    </div>
  )
}

export default Register