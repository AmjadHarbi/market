import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import emailjs from 'emailjs-com'

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import culture from "../../img/culture.jpeg";

const Subscribe = ({t}) => {

  const emailSubscriptions =(e)=> {
    e.preventDefault();
    emailjs.sendForm("service_pr839sm","template_gi31ytb",   e.target, '1H5K9i4cIiT6nSPrE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>

      <div className={Style.subscribe_box_right}>
          <Image
            src={culture}
            alt="get update"
            className={Style.sbscribeImg}
            // height={400}
            // width={300}
          />
        </div>
        <form onSubmit={emailSubscriptions}>
        <div className={Style.subscribe_box_left}>
          <h2>{t("subscribeTitle")} </h2>
          <p>
              {t("subscribeP")}
          </p>
          {/* <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div> */}

          {/* <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div> */}
        <div className={Style.subscribe_checkbox}>
    <input type="checkbox" id="artist" name="artist" value="artist" />{t("artist")}
  </div>
  <div className={Style.subscribe_checkbox}>
    <input type="checkbox" id="collector" name="collector" value="collector" />{t("collector")}
  </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" name="email" placeholder={t("Enter your email")} />
            <button type="submit"><RiSendPlaneFill className={Style.subscribe_box_left_input_icon} /></button>
            
          </div>
        </div>
</form>
       
      </div>
    </div>
  );
};

export default Subscribe;
