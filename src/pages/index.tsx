import { Grid } from '@/components/Grid'
import { ProductCard } from '@/components/ProductCard'
import { SearchCTA } from '@/components/SearchCTA'
import { Searchbar } from '@/components/Searchbar'
import { getAutocompleteSuggestions } from '@/db/getAutocompleteSuggestions'
import { getProducts } from '@/db/getProducts'
import styles from '@/styles/homepage.module.css'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import cx from 'classnames'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { useDebounce } from '@/hooks/useDebounce'

enum MODES {
  VIEW_MODE = 'VIEW_MODE',
  SEARCH_MODE = 'SEARCH_MODE'
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { q = '' } = query
  const queryClient = new QueryClient()
  const searchQuery = encodeURIComponent(q as string)

  await queryClient.prefetchQuery(
    ['products', searchQuery],
    () => getProducts(searchQuery),
    {
      cacheTime: 100_000
    }
  )

  return {
    props: {
      searchQuery,
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default function Home({
  searchQuery: initialSearchQuery
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [searchQuery, setSearchQuery] = useQueryParam(
    'q',
    withDefault(StringParam, initialSearchQuery)
  )
  const [searchInputValue, setSearchInputValue] = useState(searchQuery)

  const debouncedSearchInputValue = useDebounce(searchInputValue, 500)

  const [mode, setMode] = useState(MODES.VIEW_MODE)

  const { data } = useQuery(
    ['products', searchQuery],
    () => getProducts(searchQuery),
    {
      cacheTime: 100_000
    }
  )

  const { data: autocompleteResponse } = useQuery(
    ['autocomplete', debouncedSearchInputValue],
    () => getAutocompleteSuggestions(debouncedSearchInputValue),
    {
      cacheTime: 100_000
    }
  )

  const handleSearchAction = (text: string) => {
    setSearchQuery(text)
    setSearchInputValue(text)
  }

  return (
    <main className={styles.container}>
      <Searchbar
        placeholder="Search Product"
        value={searchInputValue}
        inputMode="search"
        onChange={(event) => setSearchInputValue(event.target.value)}
        onFocus={() => setMode(MODES.SEARCH_MODE)}
        onBlur={() =>
          setTimeout(() => {
            setMode(MODES.VIEW_MODE)
          }, 100)
        }
        onPressEnter={setSearchQuery}
      />
      <div
        className={cx({
          [styles.no_visible]: mode === MODES.SEARCH_MODE
        })}
      >
        <h1 className={cx('headline', styles.headline)}>
          Find your favorite products now.
        </h1>
        <Grid minWidth={10} gutter="1.5rem">
          {data?.payload.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </div>

      <div
        className={cx({
          [styles.no_visible]: mode === MODES.VIEW_MODE
        })}
      >
        <SearchCTA
          listItems={autocompleteResponse ?? []}
          onAction={handleSearchAction}
        />
      </div>
    </main>
  )
}
