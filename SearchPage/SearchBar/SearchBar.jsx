import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearchBar = ({ onHandleSearch, onClearSearch, t}) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder={t("Type your keyword")}
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default withNamespaces()(SearchBar);
