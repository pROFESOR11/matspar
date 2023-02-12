import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from '@/types/Product'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | string>
) {
  try {
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res
        .status(error.response?.status ?? 500)
        .send(error.response?.data ?? 'Internal Server Error.')
    }
    res.status(500).send('Internal Server Error.')
  }
}
