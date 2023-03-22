import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { withNamespaces } from 'react-i18next';

//INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/componentsindex.js";

const Form = ({t}) => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">{t("username")}</label>
            <input
              type="text"
              placeholder={t("enter your name")}
              className={Style.Form_box_input_userName}
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="email">{t("email")}</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder={t("Enter your email")} />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">{t("description")}</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder={t("something about yourself in few words")}
            ></textarea>
          </div>

          {/* <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>

              <input type="text" placeholder="website" />
            </div>
          </div> */}

          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              {/* <label htmlFor="facebook">Facebook</label> */}
              <br/>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              {/* <label htmlFor="Twitter">Twitter</label> */}
              <br/>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              {/* <label htmlFor="Instragram">Instragram</label>
             */} <br/> 
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://" />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="wallet">{t("WalletAddress")}</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder=""
              />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_btn}>
            <Button
              btnName={t("uploadProfile")}
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default withNamespaces()(Form);
