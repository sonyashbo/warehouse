import React, { useEffect, useState } from 'react'
import availabilityService from '../services/availabilityService'
import CustomLoader from './loader'

const Modal = ({ item, setShowModal }) => {
  const [availability, setAvailability] = useState(null)
  useEffect(() => {
    if (item) {
      getAvailability()
        .then(res => {
          const showText = mapToAvailabilityText(res)
          setAvailability(showText)
        })
    }
  })

  const getAvailability = async () => {
    return await availabilityService.getAvailability(item.manufacturer, item.id)
  }

  const closeModal = () => {
    setShowModal(null)
    setAvailability(null)
    item = null
  }

  if (!item) {
    return (<></>)
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={closeModal}>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div
              className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold"> {item.name} </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}>
                <span
                  className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                </span>
              </button>
            </div>
            <div className="p-1 flex-none">
              <p className="my-4 text-gray-600">Product: {item.name} </p>
              <p className="my-4 text-gray-600">Manufacturer: {item.manufacturer} </p>
              <p className="my-4 text-gray-600">Price: {item.price}$ </p>
              <p className="my-4 text-gray-600">Colors: {item.color.map(c => (
                <span key={c}>{c}  </span>))} </p>
              {
                availability ?
                  <p className="my-4 text-gray-600 font-bold">{availability}</p>
                  : <CustomLoader/>
              }

            </div>
            <div
              className="flex items-center justify-end p-1 border-t border-solid border-gray-300 rounded-b">
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={closeModal}>
                                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

const mapToAvailabilityText = (availability) => {
  return availability === 'INSTOCK' ? 'The product is in stock' :
    availability === 'OUTOFSTOCK' ? 'The product is out of stock' :
      'Only 10 products left in stock'
}
export default Modal