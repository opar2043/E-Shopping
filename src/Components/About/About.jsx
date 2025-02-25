import Title from "../Shared/Title"
import AboutBanner from "./AboutBanner"
import Choosw from "./Choosw"
import Faq from "./Faq"

const About = () => {
  return (
    <div>
      <Title head={'About'} head2={'US'} ></Title>
      <AboutBanner></AboutBanner>
      <Choosw></Choosw>
      <Faq></Faq>
    </div>
  )
}

export default About