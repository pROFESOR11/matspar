import { Icon } from '@/components/Icon'
import styles from './searchCTA.module.css'
import cx from 'classnames'
import type { AutocompleteResponse } from '@/types/Autocomplete'

type SearchCTAProps = {
  listItems: AutocompleteResponse
  onAction?: (text: string) => void
}

export const SearchCTA = ({ listItems, onAction }: SearchCTAProps) => {
  return (
    <div className={cx(styles.container, 'text')}>
      <div className={styles.header}>
        <span>Popular Searches</span>
      </div>

      <div className={styles.list_items_container}>
        {listItems?.map(({ text }) => {
          return (
            <a
              key={text}
              className={styles.list_item}
              onClick={() => onAction?.(text)}
            >
              <span>{text}</span>
              <Icon name="Search" className={styles.list_item_icon} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
