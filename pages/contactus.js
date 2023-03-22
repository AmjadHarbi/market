import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiMail,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { withNamespaces } from 'react-i18next';

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactus = ({t}) => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>{t("contact")}</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>{t("address")}</h3>
              <p>
              {t("TaibahValleyAddress")}
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>{t("email")}</h3>
              <p>info@TaibahValley.com.sa</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>{t("phone")}</h3>
              <p>Tel. +966148618888 Ext. 1621</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>{("socials")}</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiMail />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">{t("username")}</label>
                <input
                  type="text"
                  placeholder={t("enter your name")}
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">{t("email")}</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder={t("Enter your email")} />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">{t("message")}</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder={t("write here")}
                ></textarea>
              </div>
              <Button
                btnName={t("sendMessage")}
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(contactus);
