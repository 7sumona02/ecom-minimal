'use client'

import { Alert, AlertDescription } from './alert'
import { Button } from './button'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'
import { useMutation } from 'convex/react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import React, { useState } from 'react'
import FileUpload from './FileUpload'
import { api } from './products'

const ProductForm = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: 0,
    imageUrl: ''
  })

  const [issubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [isFormValid, setIsFormValid] = useState(false)

  const addProduct = useMutation(api.products.add)

  useEffect(() => {
    const { title, description, price, imageUrl } = productData
    setIsFormValid(
      title.trim() !== '' && 
      description.trim() !== '' &&
      price > 0 && 
      imageUrl !== ''
    )
  },[productData])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setProductData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value): value,

    }))
  }

  const onUpload = (url) => {
    setProductData(prev => ({...prev, imageUrl: url}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    console.log(productData)

    try{
      await addProduct(productData)
      setProductData({
        title: '',
        description: '',
        price: 0,
        imageUrl: ''
      })
      alert('Product added successfully!')
    } catch(err){
      setError("Failed to add Product")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Product Card</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type='text' id='title' name='title' value={productData.title} onChange={handleInputChange} required  />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id='description' name='description' value={productData.description} onChange={handleInputChange} required  />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input type='number' id='price' name='price' value={productData.price} onChange={handleInputChange} required min="0" step="0.01" />
            </div>

            <div>
              <Label>Product Image</Label>
              <FileUpload onUpload={onUpload} />
              {productData.imageUrl && (
                <>
                  <Alert variant={'default'}>
                    <CheckCircle2 />
                    <AlertDescription>
                      Image uploaded successfully!
                    </AlertDescription>
                  </Alert>
                  <img src={productData.imageUrl} />
                </>
              )}
            </div>          
            {error && (
              <Alert variant={'destructive'}>
                <AlertCircle />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type='submit' disabled={!isFormValid || issubmitting}>
              {issubmitting ? 'Adding Product...' : 'Add Product'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductForm