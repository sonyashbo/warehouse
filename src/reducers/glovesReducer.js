import productService from '../services/productService'

export const initGloves = () => {
  return async dispatch => {
    const data = await productService.getProducts('gloves')
    dispatch( {
      type: 'INIT_GLOVES',
      data,
    })
  }
}

const glovesReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_GLOVES':
    return action.data
  default:
    return state
  }
}

export default glovesReducer