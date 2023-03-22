import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {MdLogin} from "react-icons/md"; 
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import {MdLanguage, MdOutlineSwitchAccount} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import useOnclickOutside from "react-cool-onclickoutside";
import { withNamespaces } from 'react-i18next';
import { FaWallet, FaPercentage } from "react-icons/fa";
//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";
import logo from "../../img/logo-edit2.png";
import walletIcon from "../../img/walletIcon.png";
import person from "../../img/person.jpeg";
// import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
//IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import i18n from '../../i18n';



function NavBar({t}){
  //----USESTATE COMPONNTS
  const [discover, setDiscover] = useState(false);
  // const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  const [language, setLanguage] = useState("en")
  console.log(language)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    console.log(lng)
    }


  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (!discover) {
      setDiscover(true);
      // setHelp(false);
      setNotification(false);
      setProfile(false);
    // } else if (btnText == "Help Center") {
    //   setDiscover(false);
    //   setHelp(true);
    //   setNotification(false);
    //   setProfile(false);
    } else {                                                                         
      setDiscover(false);
      // setHelp(false);
      setNotification(false);
      setProfile(false);
    }  
  };
 
  const ref = useOnclickOutside(() => {
    setDiscover(false);
    // setHelp(false);
    setNotification(false);
    setProfile(false);
  });

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      // setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      // setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  //SMART CONTRACT SECTION
  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
         
       
          <div className={Style.logo}>
            <a href="/">
          <Image
          src= {logo}
          alt="logo"
          width={100}
          height={100}
          className={Style.profile_account_img}
        /></a>
         
            <h1></h1>
          
       
          </div>

           <div className={Style.navbar_container_left}>
          <div className={Style.navbar_container_left_discover}>

            {/* explore NFTs */}
            <a href="/collection" params={{t}}>{t("exploreNFTs")}</a>
          </div>

          {/* ABOUT US PAGE */}
          <div className={Style.navbar_container_left_about}>
            <a href="/aboutus" params={{t}}>{t("about")}</a>
          </div>

            {/* BLOG PAGE */}
            <div className={Style.navbar_container_left_blog}>
            <a href="/blog" params={{t}}>{t("blog")}</a>
          </div>


          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_left_help}>
            <a href="/contactus" params={{t}}>{t("help")}</a>
          </div>

           {/* search */}

          <div className={Style.navbar_container_left_box_input}>
                  <a href="/searchPage" params={{t}}><BsSearch onClick={() => {}} className={Style.search_icon} /></a>
                </div>
              </div>



        {/* //END OF LEFT SECTION */}
      

          {/* NOTIFICATION */}
          {/* <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification t={t} />}
          </div> */}

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button icon= {<FaWallet />} btnName={t("connect")} handleClick={() => connectWallet()} /> 
            ) : (
              <Button
                btnName={t("create")}
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div>
            {/* {login} */}
          <div className={Style.navbar_container_right_login}>
          <a href="/author" params={{t}}><MdOutlineSwitchAccount className={Style.login_icon} /></a>
        
    </div>
              {/* switch language */}
          <div className={Style.navbar_container_right_lang}>
        {language == "en"?
          <button btnName="AR" className={Style.lang} onClick={() => changeLanguage('ar')}><MdLanguage className={Style.lang_icon}/> </button>
          :
          <button btnName="E" className={Style.lang} onClick={() => changeLanguage('en')}><MdLanguage className={Style.lang_icon}/></button>
        }
    </div>
</div>
       
          {/* USER PROFILE */}

          {/* <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={person}
                alt="Profile"
                width={70}
                height={70}
                onClick = {() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile currentAccount={currentAccount} t={t} />}
            </div>
          </div> */}

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onMouseMove={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
            t= {t}
            changeLanguage={changeLanguage} 
            language={language}
          />
        </div>
      )}

      {openError && <Error />}
    </div>
  );
};

export default withNamespaces()(NavBar);
