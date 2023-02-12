import axios from 'axios'

export const webAppUrl = process.env.NEXT_PUBLIC_VERCEL_URL?.includes('http')
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

export const apiInstance = axios.create({
  baseURL: `${webAppUrl}/api`
})
