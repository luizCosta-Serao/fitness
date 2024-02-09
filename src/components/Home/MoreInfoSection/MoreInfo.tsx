import MoreInfoImgOne from '../../../assets/more_info_img_1.png'
import MoreInfoImgTwo from '../../../assets/more_info_img_2.png'
import styles from './MoreInfo.module.css'
import BoxMoreInfo from './BoxMoreInfo'

const MoreInfo = () => {
  return (
    <section className={styles.moreInfo}>
      <BoxMoreInfo
        title='Work out at home for free.'
        description='We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!'
        src={MoreInfoImgOne}
        flexDirection='row'
      />
      <BoxMoreInfo
        title='Get more with low-cost training programs and advanced features.'
        description='We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!'
        src={MoreInfoImgTwo}
        flexDirection='row-reverse'
      />
    </section>
  )
}

export default MoreInfo