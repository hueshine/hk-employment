import Link from "next/link";
import React from "react";

import style from "@/styles/component.module.scss";

const Button = ({ link, text }) => {
  return (
    <Link className={style.btn} href={link}>
      {text}
    </Link>
  );
};

export default Button;
