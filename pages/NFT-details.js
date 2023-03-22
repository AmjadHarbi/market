import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";
// import ee from '../img/collection.png';
//IMPORT SMART CONTRACT DATA
import UlaNFT5 from "../img/UlaNFT5.png";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const NFTDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    
    // if (!router.isReady) return;
    // setNft(router.query)
    // console.log(router.query)
    if (router.isReady){
      setNft(router.query)
      console.log('router.query' + nft)
    }
  }, [router.isReady]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      {/* <Category />
      <Brand /> */}
    </div>
  );
};

export default NFTDetails;
