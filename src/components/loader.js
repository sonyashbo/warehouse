import React from 'react'
import loader from '../img/loader.svg'

const CustomLoader = () => (
  <div>
    <p className="my-4 text-gray-600">Please, wait to see if the product is available...</p>
    <img className="animate-spin mx-auto" src={loader}/>
  </div>

)

export default CustomLoader