import React from 'react'

const Product = ({ item, image, setDetailedItem }) => {
  return (
    <div className="md:w-1/3 px-12 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2">
        <img className="w-32 h-32 mx-auto" src={image} alt="gloveImage"/>
        <div className="px-6 py-4">
          <div className="flex-auto text-lg font-semibold">{item.name}</div>
          <div className="text-lg font-semibold text-gray-500">{item.price}$</div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                        Manufacturer: {item.manufacturer}
          </div>
        </div>
        <div className="px-8 py-2">
          {item.color.map(c =>
            <span key={c}
              className="inline-block bg-gray-200 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{c}</span>)}

        </div>
        <button className="py-2 underline hover:text-gray-500" onClick={() => setDetailedItem(item)}>Show
                    details
        </button>
      </div>
    </div>
  )
}

export default Product