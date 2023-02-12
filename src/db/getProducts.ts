import { ProductSearchResponse } from '@/types/Product'
import { apiInstance } from './config'

export async function getProducts(q: string): Promise<ProductSearchResponse> {
  return (await apiInstance.get(`/searchProducts?q=${q}`)).data
}
