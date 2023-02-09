import Image from 'next/image'
import styles from './productCard.module.css'

export const ProductCard = () => {
  return (
    <a href="#">
      <article className={styles.container}>
        <div className={styles.image_wrapper}>
          <Image
            className={styles.image}
            src="/product.png"
            alt="product"
            width="0"
            height="0"
          />
        </div>
        <h3>Product Name Product Name </h3>
        <h4>Brand Brand Brand Brand Brand Brand</h4>

        <span>$799</span>
      </article>
    </a>
  )
}
