import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import UlaNFT1 from "../img/UlaNFT1.png";
import UlaNFT2 from "../img/UlaNFT2.png";
import UlaNFT3 from "../img/UlaNFT3.png";
import UlaNFT4 from "../img/UlaNFT4.png";
import UlaNFT5 from "../img/UlaNFT5.png";
import UlaNFT6 from "../img/UlaNFT6.png";

import DiriyaNFT1 from "../img/DiriyaNFT1.png";
import DiriyaNFT2 from "../img/DiriyaNFT2.png";
import DiriyaNFT3 from "../img/DiriyaNFT3.png";
import DiriyaNFT4 from "../img/DiriyaNFT4.png";



import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';

const collection = ({t}) => {
  const collectionArray = [
    {
      // id:1,
      image: UlaNFT1,
    },
    {
      // id:2,
      image: UlaNFT2,
    },
    {
      // id:3,
      image: UlaNFT3,
    },
    {
      // id:4,
      image: UlaNFT4,
    },
    {
      // id:5,
      image: UlaNFT5,
    },
    {
      // id:6,
      image:UlaNFT6,
    },
    {
      // id:7,
      image: DiriyaNFT1,
    },
    {
      // id:8,
      image: DiriyaNFT2,
    },
    {
      // id:9,
      image: DiriyaNFT3,
    },
    {
      // id:10,
      image: DiriyaNFT4,
    },
  ];
  return (
    <div className={Style.collection}>
      {/* <Banner bannerImage={images.creatorbackground1} /> */}
      {/* <CollectionProfile /> */}
      {/* <Filter /> */}
  
      <NFTCardTwo NFTData={collectionArray} t={t} />

      {/* <Slider /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default withNamespaces()(collection);
