
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import ProductForm from './_components/ProductForm'

const Page = () => {
    const {sessionClaims} = auth()

    if(sessionClaims?.metadata.role !== "admin"){
        redirect("/")
    }
  return (
    <div>
        <ProductForm />
    </div>
  )
}

export default Page