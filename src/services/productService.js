import axios from 'axios'

const baseUrl = '/api/products'
const getProducts = async (type) => {
  const response = await axios.get(`${baseUrl}/${type}`)
  return response.data
}

export default { getProducts }