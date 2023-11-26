
import bgImage from './../../public/assets/img/henry-bg.jpeg'
import { Block } from './components/Block/Block'
import { Hero } from './components/hero/Hero'
import { Services } from './components/services/Services'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero backgroundImage={bgImage} />
      <Block />
      <Services />
    </main>
  )
}
