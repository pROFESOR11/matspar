import { Icon } from '@/components/Icon'
import styles from './Searchbar.module.css'
import cx from 'classnames'

export const Searchbar = (props: JSX.IntrinsicElements['input']) => {
  return (
    <div className={styles.container}>
      <Icon name="Menu" className={cx(styles.icon, styles.menu_icon)} />
      <div className={styles.input_container}>
        <Icon name="Search" className={styles.icon} />
        <input className={styles.input} {...props} />
      </div>
    </div>
  )
}
