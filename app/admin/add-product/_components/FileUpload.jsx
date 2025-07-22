"use client"

import { UploadDropzone } from "@uploadthing/react"

const FileUpload = ({onUpload}) => {
  return (
    <div>
        <UploadDropzone endpoint='imageUplaoder' 
        onClientUploadComplete={(res) => {
            onUpload(res?.[0].url)
        }}
        onUploadError={(error) => {
            console.log(error)
        }}
        />
    </div>
  )
}

export default FileUpload