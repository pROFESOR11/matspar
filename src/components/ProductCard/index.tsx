import type { Product } from '@/types/Product'
import { formatUsd } from '@/utils/formatUsd'
import { getProductImageUrl } from '@/utils/getProductImage'
import Image from 'next/image'
import styles from './productCard.module.css'
import cx from 'classnames'
import { Poppins } from '@next/font/google'

type ProductCardProps = {
  product: Product
}

const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = getProductImageUrl(product.image)

  return (
    <a href="#">
      <article className={cx(styles.container, 'shadow')}>
        <div className={styles.image_wrapper}>
          {imageUrl ? (
            <Image
              className={styles.image}
              src={imageUrl}
              alt={`${product.name}/${product.brand}`}
              width="0"
              height="0"
            />
          ) : (
            <div className={styles.image_placeholder} />
          )}
        </div>
        <h3 className={cx('headline3 text_ellipsis', styles.product_name)}>
          {product.name}
        </h3>
        <h4 className={cx('text_small text_ellipsis', styles.brand)}>
          {product.brand}
        </h4>

        <span className={cx(poppins.className, styles.price, 'text_price')}>
          {formatUsd(product.price)}
        </span>
      </article>
    </a>
  )
}
