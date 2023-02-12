import { Grid, GridProps } from '@/components/Grid'
import { ProductSearchResponse } from '@/types/Product'
import { ProductCard } from '@/components/ProductCard'
import { Spinner } from '@/components/Spinner'

type ProductCardGridProps = {
  productResponse?: ProductSearchResponse
  isLoading?: boolean
  gridProps?: GridProps
}

export const ProductCardGrid = ({
  gridProps,
  productResponse,
  isLoading = false
}: ProductCardGridProps) => {
  if (isLoading) return <Spinner />
  if (!productResponse)
    return <span className="text">Something went wrong!</span>

  return (
    <Grid minWidth={10} gutter="1.5rem" {...gridProps}>
      {productResponse?.payload.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}
