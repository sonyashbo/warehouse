import React, {useState} from "react";
import Modal from './modal'

const Products = ({items, image, showDetails, detailsVisible}) => {
    const [detailedItem, setDetailedItem] = useState(null)
    return (
        <>
        <div className="w-screen flex flex-wrap flex-row place-items-center">
            <div className="flex flex-wrap sm:content-between">
                {
                    items.map(item =>
                        <div className="md:w-1/3 px-12 py-4" key={item.id}>
                            <div className="rounded overflow-hidden shadow-lg my-2">
                                <img className="w-32 h-32 mx-auto" src={image} alt="gloveImage"/>
                                <div className="px-6 py-4">
                                    <div className="flex-auto text-lg font-semibold">{item.name}</div>
                                    <div className="text-lg font-semibold text-gray-500">{item.price}$</div>
                                    <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                                        Manufacturer: {item.manufacturer}
                                    </div>
                                </div>
                                <button onClick={() => setDetailedItem(item)}>show</button>
                                <div className="px-8 py-4">
                                    {item.color.map(c =>
                                        <span key={c}
                                              className="inline-block bg-gray-200 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{c}</span>)}

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
            <Modal item={detailedItem} /*showModal={detailedItem!=null}*/ setShowModal={setDetailedItem}/>
    </>
    )
}

export default Products