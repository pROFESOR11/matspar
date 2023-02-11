export interface Prices {
  [key: number]: number
}

export interface WPrices {
  [key: number]: number
}

export interface Product {
  productid: number
  id: number
  name: string
  brand: string
  brandid: any
  image: string
  weight_pretty: string
  weight_ish: string
  slug: string
  price: number
  prices: Prices
  promo: any
  filters: string[]
  country_from: string
  categoryids: any
  rating: any
  reviews_count: any
  price_info: number[]
  w_prices: WPrices
  w_promo: any
  w_from_prices: any[]
  median_price: number
}

export interface NewFilters {
  from_sweden: number
  ae: number
  am: number
  an: number
  aw: number
  green_dot: number
  recyclable_general_claim: number
  vegan: number
  vegetarian: number
}

export interface Rule {
  type: string
  key: string
  id: string
}

export interface Pagination {
  page: number
  more: boolean
  rules: Rule[]
}

export interface Payload {
  products: Product[]
  total: number
  new_filters: NewFilters
  pagination: Pagination
  topprio?: any
  productbundle: any[]
}

export interface ProductSearchResponse {
  payload: Payload
  type: string
  slug: string
  active: boolean
}
