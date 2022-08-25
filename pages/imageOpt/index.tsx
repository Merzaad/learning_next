import { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.png'

const ImageOpt: NextPage = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <Image layout="intrinsic" placeholder="blur" src={img1} alt="" />
      </div>
      <div className={styles.image}>
        <Image layout="intrinsic" placeholder="blur" src={img2} alt="" />
      </div>
      <div className={styles.image}>
        <Image layout="intrinsic" placeholder="blur" priority src={img3} alt="" />
      </div>
    </div>
  )
}

export default ImageOpt
