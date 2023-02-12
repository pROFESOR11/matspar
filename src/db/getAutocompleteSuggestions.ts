import { AutocompleteResponse } from '@/types/Autocomplete'
import { baseUrl } from './config'

export async function getAutocompleteSuggestions(
  q: string
): Promise<AutocompleteResponse> {
  if (!q) return []
  var requestOptions = {
    method: 'GET'
  }

  const response = await fetch(`${baseUrl}/autocomplete?q=${q}`, requestOptions)

  return await response.json()
}
