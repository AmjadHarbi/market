import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = ({t}) => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>{t("createNewNFT")}</h1>
          <p>
            {t("createP")}
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>{t("Image or 3D Model")}</h2>
          <p>
            {t("uploadP")}
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} t={t} />
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(uploadNFT);
