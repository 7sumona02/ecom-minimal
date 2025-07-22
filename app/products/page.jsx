'use client'

import { SignIn, useUser } from '@clerk/nextjs'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

const page = () => {
     const { user } = useUser()

  if (!user) return (
   <div className='h-screen w-screen flex justify-center items-center'><SignIn forceRedirectUrl='/' /></div>
)
  return (
    <div className='min-h-screen bg-neutral-100'>
        <Navbar />
        <Footer />
    </div>
  )
}

export default page