import type { ProductSearchResponse } from '@/types/Product'
import { baseUrl } from './config'

export async function getProducts(q: string): Promise<ProductSearchResponse> {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
    slug: '/kategori',
    query: {
      q
    }
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(`${baseUrl}/slug`, requestOptions)
  return await response.json()
}
