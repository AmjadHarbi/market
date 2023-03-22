import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import hawiyamixed from '../../img/hawiyamixed.png';
import spec from '../../img/spec.png';
import nft from '../../img/nft.png';
import stars from '../../img/stars.png';


//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

function HeroSection ({t}){
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{t("titleData")}</h1>
          <p>
            {t("HeroP")}
          </p>
          <Button
            btnName={t("HeroBtn")}
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={hawiyamixed}
            alt="Hero section"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
