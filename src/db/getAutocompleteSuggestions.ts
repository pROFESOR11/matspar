import { AutocompleteResponse } from '@/types/Autocomplete'
import { apiInstance } from './config'

export async function getAutocompleteSuggestions(
  q: string
): Promise<AutocompleteResponse> {
  if (!q) return []

  return (await apiInstance.get(`/autocomplete?q=${q}`)).data
}
