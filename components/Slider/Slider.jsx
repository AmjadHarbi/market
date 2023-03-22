import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { withNamespaces } from 'react-i18next';

//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";
import UlaNFT1 from "../../img/UlaNFT1.png";
import UlaNFT2 from "../../img/UlaNFT2.png";
import UlaNFT3 from "../../img/UlaNFT3.png";
import UlaNFT4 from "../../img/UlaNFT4.png";
import UlaNFT5 from "../../img/UlaNFT5.png";
import UlaNFT6 from "../../img/UlaNFT6.png";

import DiriyaNFT1 from "../../img/DiriyaNFT1.png";
import DiriyaNFT2 from "../../img/DiriyaNFT2.png";
import DiriyaNFT3 from "../../img/DiriyaNFT3.png";
import DiriyaNFT4 from "../../img/DiriyaNFT4.png";

const Slider = ({t}) => {
  const FollowingArray = [
    {
      background: UlaNFT1,
      user: UlaNFT1,
    },
    {
      background: UlaNFT2,
      user: images.user4,
    },
    {
      background: UlaNFT3,
      user: images.user5,
    },
    {
      background: UlaNFT4,
      user: images.user6,
    },
    {
      background: UlaNFT5,
      user: images.user1,
    },
    {
      background: UlaNFT6,
      user: images.user2,
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  // useEffect(() => {
  //   setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  // });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h1>{t("exploreNFTs")}</h1>
        <div className={Style.slider_box_button}>
          <p></p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_itmes} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} t ={t} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default withNamespaces()(Slider);
