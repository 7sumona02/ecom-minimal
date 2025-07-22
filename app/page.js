import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='cursor-dog h-screen w-screen bg-neutral-100 flex items-center justify-center'>
      <Link href='/products'><img src='https://matrix.redditspace.com/_matrix/media/v3/download/reddit.com/yytb1u5ewedf1' className='w-[20rem] hover:opacity-90 transition-opacity' /></Link>
    </div>
  )
}

export default page