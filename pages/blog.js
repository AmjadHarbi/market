import React from 'react'
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';
import Style from "../styles/blog.module.css";


const blog = ({t}) => {
  return (
    <div className={Style.blogStyle}>

      <h1><strong><em>{t("comingSoon")}</em></strong> </h1>
    
    </div>
  )
}

export default withNamespaces()(blog);