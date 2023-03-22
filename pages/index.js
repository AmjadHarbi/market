import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  // Title,
  // Category,
  // Filter,
  // NFTCard,
  // Collection,
  // AudioLive,
  // FollowerTab,
  Slider,
  // Brand,
  // Video,
  // Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';
import { NavBar, Footer } from "../components/componentsindex";


function Home({t}){
  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items?.reverse());
      setNftsCopy(items);
    });
  }, []);

  //CREATOR LIST
  const creators = getTopCreators(nfts);
  console.log(creators);

  const [language, setLanguage] = useState("en")
  console.log(language)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    console.log(lng)
    }

  return (
    <div className={Style.homePage}>
      {/* <NavBar /> */}
      <HeroSection t={t}/>
      <Service t={t}/>
      <BigNFTSilder t={t}/>
      {/* <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )} */}

      <Slider t={t}/>
      {/* <Collection /> */}
      {/* <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      /> */}
      {/* <Category /> */}
      <Subscribe t={t} />
      {/* <Brand /> */}
      {/* <Video /> */}
      {/* <Footer /> */}

    </div>
  );
};

export default withNamespaces()(Home);
