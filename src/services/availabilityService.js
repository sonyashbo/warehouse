import axios from 'axios'

const baseUrl = '/api/availability'
const getAvailability = async (manufacturer, productId) => {
  const response = await axios.get(`${baseUrl}/${manufacturer}/${productId}`)
  return response.data.availability
}

export default { getAvailability }