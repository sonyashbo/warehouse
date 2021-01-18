import productService from '../services/productService'

export const initBeanies = () => {
  return async dispatch => {
    const data = await productService.getProducts('beanies')
    dispatch( {
      type: 'INIT_BEANIES',
      data,
    })
  }
}

const beaniesReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BEANIES':
    return action.data
  default:
    return state
  }
}

export default beaniesReducer