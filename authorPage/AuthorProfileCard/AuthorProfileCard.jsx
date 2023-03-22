import React, { useState } from "react";
import Image from "next/image";
// import {
//   MdVerified,
//   MdCloudUpload,
//   MdOutlineReportProblem,
// } from "react-icons/md";
// import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiMail,
  TiSocialInstagram,
} from "react-icons/ti";
import { withNamespaces } from 'react-i18next';

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import person from '../../img/person.jpeg';
// import { Button } from "../../components/componentsindex.js";

const AuthorProfileCard = ({ currentAccount, t }) => {
  // const [share, setShare] = useState(false);
  // const [report, setReport] = useState(false);

  //copyAddress function
  // const copyAddress = () => {
  //   const copyText = document.getElementById("myInput");

  //   copyText.select();
  //   navigator.clipboard.writeText(copyText.value);
  // };

  // const openShare = () => {
  //   if (!share) {
  //     setShare(true);
  //     setReport(false);
  //   } else {
  //     setShare(false);
  //   }
  // };

  // const openReport = () => {
  //   if (!report) {
  //     setReport(true);
  //     setShare(false);
  //   } else {
  //     setReport(false);
  //   }
  // };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={person}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            {t("nickname")}{""}{" "}
            <span>
              {/* <MdVerified /> */}
            </span>{" "}
          </h2>

          {/* <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div> */}

          <p>
            {t("write whatever you want")}
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiMail />
            </a>
          </div>
        </div>

        {/* <div className={Style.AuthorProfileCard_box_share}> */}
          {/* <Button btnName="Follow" handleClick={() => {}} /> */}
          {/* <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          /> */}

          {/* {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                {""}
                Instragram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                {""}
                LinkedIn
              </p>
              <p>
                <span>
                  <TiMail />
                </span>{" "}
                {""}
                Gmail
              </p>
            </div>
          )} */}
                  {/* <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          /> */}

          {/* {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abouse
            </p>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};


export default withNamespaces()(AuthorProfileCard);
