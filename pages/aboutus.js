import {React, useState} from "react";
import Image from "next/image";
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';
//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = ({t}) => {
  const founderArray = [
    {
      name: "RaghadAbdulghani",
      position: "Co-founderDirector",
      // images: images.founder1,
    },
    {
      name: "AishaAljabri",
      position: "Co-founderArchitect",
      // images: images.founder2,
    },
    {
      name: "SufanaAlkushi",
      position: "Co-founder, DeveloperDesigner",
      // images: images.founder3,
    },
    {
      name: "AmjadAlmaghthawi",
      position: "Co-FounderDeveloper",
      // images: images.founder4,
    },
    {
      name: "AmmarAlraddadi",
      position: "Co-FounderDeveloper",
      // images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "title1",
      info: "info1",
    },
    {
      title: "title2",
      info: "info2",
    },
    {
      title: "title3",
      info: "info3",
    },
    {
      title: "title4",
      info: "info4",
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
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>{t("aboutus")}</h1>
            <p>
                {t("aboutusP")}            
            </p>
          </div>
          {/* <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div> */}
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>{t("founder")}</h2>
          <p>
            {t("founderP")}
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                {/* <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                /> */}
                <h3>{t(el.name)}</h3>
                <p>{t(el.position)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>{t("NFTfacts")}</h2>
          <p>
            {t("NFTfactsP")}
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{t(el.title)}</h3>
                <p>{t(el.info)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default withNamespaces()(aboutus);
