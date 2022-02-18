import axios from 'axios';

const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },

})

httpClient.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default httpClient;