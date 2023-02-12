import { Product } from '@/types/Product'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { q } = req.query

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

  const response = await fetch(`${process.env.API_URL}/slug`, requestOptions)
  const products = await response.json()
  res.status(200).json(products)
}
