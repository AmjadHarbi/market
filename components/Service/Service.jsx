import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
import step2img from "../../img/money.png";
import step3img from "../../img/step1img.png";
import step1img from "../../img/step3img.png";
import filter from "../../img/filter.webp";
import connect from "../../img/connect.webp";
import trading from "../../img/trading.webp";


const Service = ({t}) => {
  return (
    <div className={Style.service}>
       <div className={Style.service_box}>
      <div className={Style.serviceTitle}>
        <h1>{t("create and sell your NFTs")}</h1>
        </div>
     <div className={Style.service_items_box}>
      <div className={Style.service_box_item}>
      <Image
            src={step1img}
            alt="Create wallet"
            width={100}
            height={100}
          /> 
          <h3>{t("setupWallet")}</h3>
          <p>{t("step1P")}</p>
      </div>

      <div className={Style.service_box_item}>
      <Image
            src={step2img}
            alt="Create wallet"
            width={100}
            height={100}
          /> 
          <h3>{t("connect")}</h3>
          <p>{t("step2P")}</p>
      </div>

      <div className={Style.service_box_item}>
      <Image
            src={step3img}
            alt="Create wallet"
            width={100}
            height={100}
          /> 
          <h3>{t("listForSale")}</h3>
          <p>{t("step3P")}</p>
      </div>
    </div>














        <div className={Style.service_box_item}>
          {/* <Image
            src={wallet}
            alt="Create wallet"
            width={100}
            height={100}
          /> */}
          {/* <p className={Style.service_box_item_step}>
            <span>{t("step1")}</span>
          </p>
          <h3>{t("createWallet")}</h3>
          <p>
             {t("step1P")}
          </p> */}
        </div>
        <div className={Style.service_box_item}>
          {/* <Image
            src={filter}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>{t("step2")}</span>
          </p>
          <h3>{t("filterDiscover")}</h3>
          <p>
            {t("step2P")} 
          </p> */}
        </div>
        <div className={Style.service_box_item}>
          {/* <Image
            src={connect}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>{t("step3")}</span>
          </p>
          <h3>{t("connect")}</h3>
          <p>
            {t("step3P")}
          </p> */}
        </div>
        <div className={Style.service_box_item}>
          {/* <Image
            src={trading}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>{t("step4")}</span>
          </p>
          <h3>{t("startTrading")}</h3>
          <p>
            {t("step4P")}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
