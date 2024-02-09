import HeroSection from '../components/Home/HeroSection/HeroSection'
import Membership from '../components/Home/Membership/Membership'
import MoreInfo from '../components/Home/MoreInfoSection/MoreInfo'
import StartSection from '../components/Home/StartSection/StartSection'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <StartSection />
      <MoreInfo />
      <Membership />
    </main>
  )
}

export default Home