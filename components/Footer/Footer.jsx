import {React, useState} from "react";
import Image from "next/image";
import {
  TiArrowSortedDown,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedUp,
  TiMail
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from 'emailjs-com'
//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import market from "../../img/market.png";

import { Discover, HelpCenter } from "../NavBar/index";
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';


const Footer = ({t}) => {

  const [language, setLanguage] = useState("en")
  console.log(language)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    console.log(lng)
    }

    const emailSubscriptions =(e)=> {
      e.preventDefault();
      emailjs.sendForm("service_pr839sm","template_83ll7g4",   e.target, '1H5K9i4cIiT6nSPrE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            
              <TiArrowSortedUp className={Style.arrow} />
        
          </a>
          <div className={Style.footer_box_social_title}>
              <Image 
              src={market}
              alt= ""
              width={40}
              />
              <h1>{t("hawiya")}</h1>
          </div>
        
          <p>
            {t("footerP")}
          </p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiMail />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>{t("explore")}</h3>
          <Discover />
          {/* <h3>{t("help")}</h3> */}
          <a href="/contactus"><h3>{t("help")}</h3></a>
          {/* <HelpCenter /> */}
        </div>

       
        <div className={Style.subscribe}>
          <h3>{t("join")}</h3>
          <div className={Style.subscribe_box_info}>
            <p>
              {t("footerSubscribeP")}
            </p>
          </div>
          <form onSubmit={emailSubscriptions}>
          <div className={Style.subscribe_box}>
          
            <input id="sub-input" type="email" name="email" placeholder= {t("Enter your email")} />
            <button id="subscribeBtn" type="submit"><RiSendPlaneFill className={Style.subscribe_box_send} /></button> 
          
          </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Footer);
