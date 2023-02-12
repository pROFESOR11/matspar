import cx from 'classnames'
import { useState } from 'react'

import styles from './tab.module.css'

type TabItem = {
  id: string
  label: string
  [key: string]: any
}

type TabProps = {
  tabs: TabItem[]
  defaultActiveTabIndex?: number
  onTabChange?: (tab: TabItem) => void
}

export const Tab = ({ tabs, defaultActiveTabIndex, onTabChange }: TabProps) => {
  const [activeId, setActiveId] = useState(tabs[defaultActiveTabIndex ?? 0].id)

  const handleTabChange = (tab: TabItem) => {
    onTabChange?.(tab)
    setActiveId(tab.id)
  }

  return (
    <ul className={styles.container}>
      {tabs.map((tab) => {
        const { id, label } = tab
        const isActive = id === activeId
        return (
          <li
            key={label}
            className={cx(styles.tab_item, isActive ? 'subline' : 'subline2', {
              [styles.active]: isActive
            })}
          >
            <a onClick={() => handleTabChange(tab)}>{label}</a>
          </li>
        )
      })}
    </ul>
  )
}
