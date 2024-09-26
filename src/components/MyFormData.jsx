import React, { useState } from 'react'
import { brands, colors } from '../constants'

function MyFormData() {
    function handleSubmit(e){
    e.preventDefault()
    const result = new FormData(e.target)
    console.log(result.get('brand'),result.get('name'));
    }
  return (
    <div className="base-container flex justify-center">
    <form onSubmit={handleSubmit} className='max-w-96 max-h-full'>
        <div className="flex gap-5">
    <input
    name='name'
  type="text"
  placeholder="Topshiriq nomini kiriting..."
  className="input input-bordered input-info w-96 max-w-xs" />
  <select defaultValue="Mashina brendini tanlang" placeholder='Who shot first?' name='brand' className="select select-bordered w-full max-w-xs">
  <option disabled>Mashina brendini tanlang</option>
{brands.map((brand)=>{
 return <option key={brand} value={brand}>{brand}</option>
})}
</select>
<select defaultValue="Mashina rangini tanlang" placeholder='Who shot first?' name='color' className="select select-bordered w-full max-w-xs">
  <option disabled>Mashina rangini tanlang</option>
{colors.map((color)=>{
 return <option key={color} value={color}>{color}</option>
})}
</select>
 <button className='btn btn-primary' type='submit'>Tasdiqlash</button>
  </div>
    </form>
    </div>
  )
}

export default MyFormData