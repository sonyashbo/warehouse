import productService from "../services/productService";

export const initMasks = () => {
    return async dispatch => {
        const data = await productService.getProducts("facemasks")
        dispatch( {
            type: 'INIT_MASKS',
            data,
        })
    }
}

const masksReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_MASKS':
            return action.data
        default:
            return state
    }
}

export default masksReducer