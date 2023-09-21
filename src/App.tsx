import FeaturesSection from "./sections/Features"
import HeroSection from "./sections/Hero";

import PeopleLaughing from './assets/images/best-friends-coffee-shop.jpg';
import AboutSection from "./sections/About";
import ContactSection from "./sections/Contact";

function App() {

  return (
    <div className="font-primary">
      <HeroSection />
      <FeaturesSection />
      <div
        className="h-[400px] bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${PeopleLaughing})`,
          backgroundAttachment: 'fixed',
          backgroundOrigin: 'content-box',
          backgroundPosition: 'center'
        }}>
        <span className="text-gray-800 absolute bottom-0 right-0 opacity-60">
          <a href="https://www.freepik.com/free-photo/best-friends-coffee-shop_12115520.htm#query=people%20laughing&position=11&from_view=search&track=ais#position=11&query=people%20laughing">Image by gpointstudio</a> on Freepik
        </span>
      </div>
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
