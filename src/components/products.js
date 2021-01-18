import React, { useState } from 'react'
import Modal from './modal'
import Product from './product'

const Products = ({ items, image }) => {
  const [detailedItem, setDetailedItem] = useState(null)
  return (
    <>
      <div className="w-screen flex flex-wrap flex-row place-items-center">
        <div className="flex flex-wrap sm:content-between">
          {
            items.map(item =>
              <Product key={item.id} item={item} image={image} setDetailedItem={setDetailedItem} />
            )
          }
        </div>
      </div>
      <Modal item={detailedItem} setShowModal={setDetailedItem}/>
    </>
  )
}

export default Products