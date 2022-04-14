import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title='Votre application. Vos NFTs, votre pouvoir.'
        description='Achetez, vendez et collectez des NFTs avec ProNef. Gagnez des cryptos et
        rejoignez une communauté de plus de 25 millions de propriétaires.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
    </>
  );
}

export default App;
