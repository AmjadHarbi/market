import {React, useState} from "react";
import Link from "next/link";
import { withNamespaces } from 'react-i18next';
import i18n from '../../../i18n';
//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = ({t}) => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "about",
      link: "aboutus",
    },
    {
      name: "exploreNFTs",
      link: "collection",
    },
    {
      name: "search",
      link: "searchPage",
    },
    // {
    //   name: "Author Profile",
    //   link: "author",
    // },
    // {
    //   name: "NFT Details",
    //   link: "NFT-details",
    // },
    // {
    //   name: "Account Setting",
    //   link: "account",
    // },
    {
      name: "create",
      link: "uploadNFT",
    },
    // {
    //   name: "Connect Wallet",
    //   link: "connectWallet",
    // },
    {
      name: "blog",
      link: "blog",
    },
  ];
  const [language, setLanguage] = useState("en")
  console.log(language)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    console.log(lng)
    }
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }} params={{t}}>{t(el.name)}</Link>
        </div>
      ))}
    </div>
  );
};

export default withNamespaces()(Discover);
