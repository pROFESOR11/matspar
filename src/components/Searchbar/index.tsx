import { Icon } from '@/components/Icon'
import styles from './Searchbar.module.css'
import cx from 'classnames'
import { KeyboardEvent, useRef } from 'react'

type SearchbarProps = JSX.IntrinsicElements['input'] & {
  onPressEnter?: (text: string) => void
}

export const Searchbar = ({ onPressEnter, ...props }: SearchbarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onPressEnter?.(encodeURIComponent(inputRef.current?.value ?? ''))
      inputRef.current?.blur()
    }
  }

  return (
    <div className={styles.container}>
      <Icon name="Menu" className={cx(styles.menu_icon)} />
      <div className={styles.input_container}>
        <Icon name="Search" className={styles.icon} />
        <input
          ref={inputRef}
          className={styles.input}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    </div>
  )
}
