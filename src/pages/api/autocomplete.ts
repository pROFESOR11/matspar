import { AutocompleteResponse } from '@/types/Autocomplete'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutocompleteResponse>
) {
  const { q } = req.query
  if (!q) throw Error('Missing search params!')
  var requestOptions = {
    method: 'GET'
  }

  const response = await fetch(
    `${process.env.API_URL}/autocomplete?query=${q}`,
    requestOptions
  )

  const { suggestions } = await response.json()
  res.status(200).json(suggestions)
}
