import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import cratorLogo from '../../img/valley.jpeg';
import id1 from '../../img/id1.png';

import id2 from '../../img/id2.png';

import id3 from '../../img/id3.png';

import id4 from '../../img/id4.png';

import id5 from '../../img/id5.png';

import id6 from '../../img/id6.png';

import id7 from '../../img/id7.png';

// import Button from "../Button/Button";

const BigNFTSilder = ({t}) => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "NFT_1",
      id: 1,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      // like: 243,
      image: cratorLogo,
      nftImage: id7,
    },
    {
      title: "NFT_2",
      id: 2,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      // like: 243,
      image: cratorLogo,
      nftImage: id6,
    },
    {
      title: "NFT_3",
      id: 3,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      // like: 243,
      image: cratorLogo,
      nftImage: id5,
    },
    {
      title: "NFT_4",
      id: 4,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      // like: 243,
      image: cratorLogo,
      nftImage: id4,
    },
    {
      title: "NFT_5",
      id: 5,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      // like: 243,
      image: cratorLogo,
      nftImage: id3,
      },
    {
      title: "NFT_6",
      id: 6,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      like: 243,
      image: cratorLogo,
      nftImage: id2,
     },
    {
      title: "NFT_7",
      id: 7,
      name: "Taibah Valley",
      collection: "Department of art",
      price: "SOLD OUT",
      like: 243,
      image: cratorLogo,
      nftImage: id1,
      },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>{t("creator")}</p>
                <h4>
                  {/* {sliderData[idNumber].name} */}
                  {t("creatorName")}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>{t("collection")}</p>
                <h4>
                  {/* {sliderData[idNumber].collection} */}
                  {t("collectionName")}
                  </h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>{t("currentBid")}</small>
              <p>
                {/* {sliderData[idNumber].price} */}
                {t("soldout")}
              </p>
            </div>

            {/* <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p> */}

            {/* <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div> */}

            {/* <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div> */}
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            {/* <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
