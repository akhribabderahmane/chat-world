'use client'

import React from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CreateChatButton = () => {
    const router=useRouter();
   const createNewChat=async ()=>{
        /// all the logic here
        router.push('/chat/abc')
   }
  return (
    <Button onClick={createNewChat} variant={'ghost'}>
       <MessageSquarePlusIcon className='' />
    </Button>
  )
}

export default CreateChatButton