import { ProductSearchResponse } from '@/types/Product'
import { baseUrl } from './config'

export async function getProducts(q: string): Promise<ProductSearchResponse> {
  var requestOptions = {
    method: 'GET'
  }

  const response = await fetch(
    `${baseUrl}/searchProducts?q=${q}`,
    requestOptions
  )

  return await response.json()
}
