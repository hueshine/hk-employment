import { Container, Grid } from "@mui/material";
import style from "./style.module.scss";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer_logo}>
          <img src="/logo-reverse.svg" alt="" />
        </div>

        <Grid container spacing={3}>
          <Grid item md={3}>
            <div className={style.footer_sitemap}>
              <Link href="/">Who We Are</Link>
              <Link href="/">Mission | Vision</Link>
              <Link href="/">Guiding Principles</Link>
              <Link href="/">Certification</Link>
              <Link href="/">Commitment</Link>
              <Link href="/">Recuriting Process Flow</Link>
              <Link href="/">Legal Documents</Link>
              <Link href="/">Available Job</Link>
              <Link href="/">Required Document</Link>
              <Link href="/">Work Force Category</Link>
              <Link href="/">Request to Job Seeker</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </Grid>

          <Grid item md={4}>
            <div className={style.footer_contact}>
              <h6>Contact Us</h6>
              <ul>
                <li>Paris Dada, Koteshwor Nepal</li>
                <li>info@khemploymentservices.com</li>
                <li>+977 1 5921286 / 5921287</li>
              </ul>

              <div className={style.footer_contact_social}>
                <h6>Follow Us On</h6>

                <a href="" target="_blank">
                  <FacebookIcon />
                </a>
                <a href="" target="_blank">
                  <XIcon />
                </a>
                <a href="" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </Grid>

          <Grid item md={3}>
            <div className={style.footer_contact}>
              <h6>ISO 9001:2015 Certified Recuriting Agency </h6>

              <img src="/ISO.svg" alt="" />
            </div>
          </Grid>
        </Grid>

        <div className={style.footer_end}>
          <Grid container>
            <Grid item md={6}>
              <p>
                HK Employment Services, where we connect exceptional talent with
                outstanding opportunities. As a premier recruitment agency, we
                are dedicated to providing personalized, high-quality services
                that cater to the unique needs of both our clients and
                candidates
              </p>
            </Grid>

            <Grid item md={6}>
              <p style={{ textAlign: "right" }}>
                Powered by <a href="">Hue Shine</a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
