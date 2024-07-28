import { Container, Grid } from "@mui/material";
import Link from "next/link";

import style from "./style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Container maxWidth={"xl"}>
        <Grid container columnSpacing={3} alignItems={"center"}>
          <Grid item md={3}>
            <div className={style.logo}>
              <Link href="/">
                <img src="/logo-color.svg" alt="" />
              </Link>
            </div>
          </Grid>

          <Grid item md={9}>
            <ul className={style.nav}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Who We Are</Link>
              </li>
              <li>
                <Link href="/">How We Do</Link>
              </li>
              <li>
                <Link href="/">Availabe Jobs</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
