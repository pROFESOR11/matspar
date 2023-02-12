import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEB_URL}/api`
})
