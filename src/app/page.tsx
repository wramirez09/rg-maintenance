import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from './components/hero/Hero'
import bgImage from './../../public/assets/img/henry-bg.jpeg'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero backgroundImage={bgImage} />
    </main>
  )
}
