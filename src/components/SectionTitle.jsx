import React from "react";

import style from "@/styles/component.module.scss";

const SectionTitle = ({ title, text }) => {
  return (
    <div className={style.section_head}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
