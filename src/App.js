import { Button,  SectionWrapper , Download , Features } from "./components";
import assets from './assets'
import styles from "./styles/Global";
const App= () => {
  return (
    <>
     <SectionWrapper 
     title="Your own Store of NFTs.
     Start Selling"

     description="Buy, Store, Collect NFTs, 
     exchange & earn crypto . Join others using ProNef Marketplace . "

     showBtn
     mockupImg={assets.homeHero}
     banner="banner"
     />

     <SectionWrapper 
     title="Smart user interface marketplace"

     description="Experience a buttery UI of ProNef NFT marketplace . Smooth Constant colors of a fluent UI design "

     mockupImg={assets.homeCards}
     reverse={true}
     
     />
     <Features />

     <SectionWrapper 
     title="Deployement"

     description="ProNef is built using Expo whihc runs natively on all users devices .You can easily get your app inton people's hand "
     
     mockupImg={assets.feature}
     reverse={true}
     
     />

     <SectionWrapper 
     title="Creative way to showcase the store "

     description="The app contain 2 Screens . The first screen lists all the NFTs minted while the second one shows the details of the specific NFT. "

     mockupImg={assets.mockup}
     banner="banner02"
     
     />

     <Download />
     
     <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
       <p className={`${styles.pText} ${styles.whiteText}`}>Made with Love by {" "}<span className="bold">
         Dhruv Agarwal
         </span>
         </p>
     </div>

    </>
  );
}

export default App;
