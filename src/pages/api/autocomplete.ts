import { AutocompleteResponse } from '@/types/Autocomplete'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutocompleteResponse | string>
) {
  try {
    const { q } = req.query
    if (!q) throw Error()
    let response = await axios({
      url: `${process.env.API_URL}/autocomplete?query=${q}`,
      method: 'GET'
    })
    res.status(200).json(response.data.suggestions)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res
        .status(error.response?.status ?? 500)
        .send(error.response?.data ?? 'Internal Server Error.')
    }
    res.status(500).send('Internal Server Error.')
  }
}
