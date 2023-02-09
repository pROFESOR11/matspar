import styles from './grid.module.css'
import cx from 'classnames'

export type GridProps = JSX.IntrinsicElements['div'] & {
  children: React.ReactNode
  className?: string
  minWidth?: number
  columns?: number
  gutter?: number | string
}

export const Grid = ({
  children,
  className,
  minWidth = 20,
  columns,
  gutter = 10,
  ...props
}: GridProps) => {
  // Specify the minimum width of each item in the grid,
  // if an item is smaller than this, the grid will remove a column to make it fit.
  let gridTemplateColumns = `repeat(auto-fit, minmax(min(100%, ${minWidth}rem), 1fr))`

  // Hardcode the columns if they are specified.
  if (columns) gridTemplateColumns = `repeat(${columns}, 1fr)`

  return (
    <div
      {...props}
      className={cx(className, styles.grid)}
      style={{
        gridGap: gutter,
        gridTemplateColumns: gridTemplateColumns,
        ...props.style
      }}
    >
      {children}
    </div>
  )
}
