import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title='Votre application, Vos NFTs, Votre pouvoir.'
        description='Achetez, vendez et collectez des NFTs avec ProNef. Gagnez des cryptos et
        rejoignez une communauté de plus de 25 millions de propriétaires.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper 
        title='Une expérience utilisateur simple et accessible.'
        description='Appréciez une navigation fluide, colorée et agréable.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title='Deploiement'
        description='ProNef est crée avec Expo. Disponible sur tout les appareils, 
        permettez à un maximum de personnes de profiter de votre application.'
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title='Une manière créative de montrer votre application.'
        description='Recherchez vos NFTs favoris , renseignez vous et enchérissez.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-column text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Application réalisée par {''}
          <span className='bold'>Davaille-Leroy Matisse</span>
        </p>
        <p className={`${styles.whiteText}`}>Design par : Alvian Teddy Cahya Putra</p>
      </div>
    </>
  );
}

export default App;
