import { redirect } from 'next/navigation'

const page = () => {
    redirect("/admin/manage-products")
}

export default page