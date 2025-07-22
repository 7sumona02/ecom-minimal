import React from 'react'
import QuantitySelector from './QuantitySelector'

const CartItem = ({ imgUrl, title, size, price, onRemove, onQuantityChange }) => {
  return (
    <div className='flex justify-between text-black font-mono text-sm py-2.5'>
      <div className='flex items-start gap-3'>
        <div className='w-26 h-32 bg-black overflow-hidden relative'>
            <img 
                src={imgUrl} 
                alt='Product image' 
                className='w-full h-full object-cover absolute inset-0'
            />
        </div>        
        <div className='flex flex-col -space-y-1 text-left'>
            <div className='font-medium text-base'>{title}</div>
            <div className='text-neutral-400'>{size}</div>
            <div className='font-medium text-neutral-400'>$ {price}</div>
        </div>
      </div>
      <div className='flex flex-col items-end -space-y-1 text-right'>
        <QuantitySelector
          initialQuantity={1} 
          onQuantityChange={onQuantityChange} 
        />
        <div>
          <button 
            onClick={onRemove}
            className='text-neutral-400 cursor-pointer text-sm mt-2'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem