import styles from './Product.module.css'

export type ProductProps = {
  img: string;
  title: string;
  price: string;
}

const Product = ({
  img,
  title,
  price
}: ProductProps ) => {
  return (
    <div className={styles.product}>
      <img className={styles.imgProduct} src={img} alt="" />
      <h3 className={styles.titleProduct}>{title}</h3>
      <span className={styles.priceProduct}>{price}</span>
      <button className={styles.buy}>Buy</button>
    </div>
  )
}

export default Product