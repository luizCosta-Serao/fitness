import React from 'react'
import styles from './Products.module.css'
import Product from './Product.js'
import Error from '../../Global/Error.js';
import Loading from '../../Global/Loading.js';

type ProductsArray = {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Products = () => {
  const [productsStore, setProductsStore] = React.useState<ProductsArray[] | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('../../../../products.json')
        const json = await response.json()
        setProductsStore(json)
      } catch (error) {
        setError('Error in data request')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <Loading />
  if (error) return <Error>{error}</Error>
  if (!productsStore) return null
  return (
    <section className={styles.products}>
      <div className={styles.listProducts}>
        {productsStore.map((product) => (
          <Product
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default Products