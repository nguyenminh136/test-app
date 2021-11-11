import axios, { AxiosRequestConfig } from 'axios'

export function initEndpointService() {
  async function sendGet(url: string, params?: any) {
    const requestConfig: AxiosRequestConfig = {
      params,
      url,
      method: 'GET',
      timeout: 30000,
      baseURL: 'https://api.github.com/',
      headers: {
        'Content-Type': 'application/vnd.github.v3+json',
        'Authorization': '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',
        
      }
    }
    try {
      const response = await axios.request(requestConfig)
      return response.data
    }catch (error) {
      return { error }
    }
  }
  return {
    sendGet
  }
}