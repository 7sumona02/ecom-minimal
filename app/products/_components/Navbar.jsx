'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ButtonHoverUnderLine from './ButtonHover'
import CartItem from './CartItem'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 1, imgUrl: 'https://nomennescio.fi/cdn/shop/files/Nomen_Nescio_444C_Raglan_Blouse_1_1_561f88e4-6fbb-4623-b3b2-ee313e198f0c_3000x.jpg?v=1743520011', title: 'good tshirt', size: 'M', price: 500, quantity: 1 },
    { id: 2, imgUrl: 'https://nomennescio.fi/cdn/shop/files/Nomen_Nescio_407_Standard_T-Shirt_1_1_e61e3f28-6b81-449c-a876-3003dd2645cf_3000x.jpg?v=1752232080', title: 'good pants', size: 'XXL', price: 1200, quantity: 1 }
  ])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <div className='font-mono bg-neutral-100 z-50 w-screen h-16 flex justify-between items-center px-10 text-sm text-black font-medium'>
        <Link className='cursor-pointer' href='/'><div><ButtonHoverUnderLine title={'YEEZY'} /></div></Link>
        <Link className='cursor-pointer' href='/all-products'><div><ButtonHoverUnderLine title={'All products'} /></div></Link>
        <div className='cursor-pointer' onClick={toggleCart}>
          <ButtonHoverUnderLine title={'Cart'} />
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[24rem] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center pb-6">
            <h2 className="text-sm font-mono text-black uppercase tracking-tight">{formattedDate}</h2>
            <button onClick={toggleCart}>
              <img src='/close.svg' alt='close' className='size-4.5' />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className='flex flex-col gap-4'>
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    size={item.size}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove={() => handleRemoveItem(item.id)}
                    onQuantityChange={(newQty) => handleQuantityChange(item.id, newQty)}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between font-mono text-sm mb-4">
              <span>Total</span>
              <span>$ {totalAmount}</span>
            </div>
            <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors font-mono text-sm">
              Buy now $ {totalAmount}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleCart}
        />
      )}
    </>
  )
}

export default Navbar