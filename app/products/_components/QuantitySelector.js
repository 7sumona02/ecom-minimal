'use client'
import React, { useState } from 'react'

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  const increaseQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onQuantityChange(newQuantity)
  }

  return (
    <div className="flex items-center bg-neutral-100 rounded">
      <button 
        onClick={decreaseQuantity}
        className="px-2 py-1 text-black"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-2 py-1 text-sm w-6 text-center">{quantity}</span>
      <button 
        onClick={increaseQuantity}
        className="px-2 py-1 text-black"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector