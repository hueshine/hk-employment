import { Container, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

import homeStyle from "@/styles/home.module.scss";
import componentStyle from "@/styles/component.module.scss";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "careers better.",
        "teams stronger.",
        "futures brighter.",
        "talent thrive.",
      ],
      startDelay: 0,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>HK Employment</title>
        <meta property="og:image" content={``} />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
      </Head>

      <div className={homeStyle.hero_flex}>
        <div className={homeStyle.animated_line}>
          <svg viewBox="0 0 1440 1256" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                x1="42.1616232%"
                y1="55.9936209%"
                x2="13.3035523%"
                y2="102.347996%"
                id="linearGradient-1"
              >
                <stop stopColor="#9861A8" offset="0%"></stop>
                <stop stopColor="#49A5CD" offset="51.2880068%"></stop>
                <stop stopColor="#EE7D22" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(0 -284)"
                stroke="url(#linearGradient-1)"
                strokeWidth="10"
              >
                <g id="home-stroke" transform="translate(-11.095 131.848)">
                  <path
                    d="M70,1480.09307 C521.512538,1388.15374 761.95041,1223.56734 791.313615,986.333879 C835.358423,630.483684 953.449728,168.141376 1464.21688,70"
                    className="stroke"
                    transform="rotate(6 767.108 775.047)"
                    style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <section className={homeStyle.hero}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item md={7}>
                <div className={homeStyle.hero_content}>
                  <h1>
                    We can make <br /> <span ref={el}>careers better</span>
                  </h1>

                  <p>
                    Our team of dedicated professionals brings diverse expertise
                    and a deep understanding of various industries, allowing us
                    to match the right talent with the right opportunities
                    effectively.
                  </p>
                </div>
              </Grid>

              <Grid item md={5}>
                <div className={homeStyle.hero_image}>
                  <div className={homeStyle.spotlight}>
                    <img src="/dynamic/banner.jpg" alt="" />
                  </div>

                  <div className={homeStyle.spotlight_stroke_wrapper}>
                    <div className={homeStyle.spotlight_stroke}></div>
                  </div>

                  <div className={homeStyle.spotlight_ripple_wrapper}>
                    <img src="/ripple-orange.png" alt="" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className={homeStyle.hero_intro}>
          <img src="/pattern.png" alt="" />
          <Container maxWidth="lg">
            <Grid container spacing={12}>
              <Grid item md={6}>
                <div className={homeStyle.hero_intro_circle}>
                  <h3>Who we are</h3>
                </div>
              </Grid>

              <Grid item md={1}></Grid>
              <Grid item md={5}>
                <div className={homeStyle.hero_intro_text}>
                  <h4>Our Story</h4>
                  <p>
                    Welcome to HK Employment, where we connect exceptional
                    talent with outstanding opportunities. As a premier
                    recruitment agency, we are dedicated to providing
                    personalized, high-quality services that cater to the unique
                    needs of both our clients and candidates.
                  </p>

                  <h4>Mission</h4>
                  <p>
                    Our mission is to bridge the gap between exceptional talent
                    and outstanding opportunities. We strive to empower
                    businesses by providing them with top-tier candidates who
                    will drive their success and growth.
                  </p>

                  <h4>Vision</h4>
                  <p>
                    Our vision is to become the leading recruitment agency
                    renowned for our integrity, innovation, and dedication to
                    excellence. We aim to create a seamless hiring experience
                    that transforms the recruitment landscape and fosters
                    long-lasting professional relationships.
                  </p>

                  <Button link={"/"} text={"Learn More About Who We Are"} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>

      <section className={componentStyle.commitment}>
        <div className={componentStyle.animated_line}>
          <svg viewBox="0 0 175 380" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                x1="47.172597%"
                y1="14.6168191%"
                x2="51.295993%"
                y2="61.0019266%"
                id="linearGradient-2"
              >
                <stop stopColor="#75C1E4" offset="0%" />
                <stop stopColor="#C93C27" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-1265 -2094)"
                stroke="url(#linearGradient-2)"
                strokeWidth="10"
              >
                <g id="wrapper" transform="translate(1233 2063)">
                  <path
                    d="M32.5832731,15.0067022 C39.8927817,72.6020689 72.9099221,126.441036 120.90966,159.037199 C141.047522,172.712676 163.763608,182.91861 181.410885,199.691427 C194.310296,211.949216 202.626461,229.189065 201.013442,246.918466 C198.750242,271.795578 175.822166,282.852598 160.849043,266.486359 C150.437848,255.108106 150.169012,238.004573 156.355803,223.871548 C164.373524,205.549467 180.648194,188.568027 200.633281,188.552617 C224.308652,188.534837 241.662221,212.079605 247.001052,235.16564 C255.513811,271.98405 240.95164,308.500193 216.711358,336.108369 C180.32488,377.54849 129.382153,402.778838 86.895338,436.975235"
                    className="stroke"
                    transform="rotate(-171 141.016 225.991)"
                    style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={4}>
              <SectionTitle
                title={"Why Choose Us"}
                text={
                  "With personalized service, industry expertise, and a vast talent network, we ensure efficient, successful placements that drive your business forward. Experience the difference."
                }
              />
            </Grid>

            <Grid item md={8}></Grid>
            <Grid item md={4}></Grid>

            <Grid container spacing={4} md={8}>
              <Grid item md={6}>
                <div className={componentStyle.commitment_flex}>
                  <div className={componentStyle.commitment_flex_icon}>
                    <img
                      src="/dynamic/business-presentation_14554246.svg"
                      alt=""
                    />
                  </div>

                  <div className={componentStyle.commitment_flex_content}>
                    <h5>Expertise</h5>
                    <p>
                      With years of experience in the recruitment industry, our
                      team possesses deep knowledge and insights into various
                      sectors, ensuring the best match between employers and
                      candidates.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={6}>
                <div className={componentStyle.commitment_flex}>
                  <div className={componentStyle.commitment_flex_icon}>
                    <img src="/dynamic/search-job_14554248.svg" alt="" />
                  </div>

                  <div className={componentStyle.commitment_flex_content}>
                    <h5>Personalized Service</h5>
                    <p>
                      We understand that every client and candidate is unique.
                      Our personalized approach ensures that we tailor our
                      services to meet your specific needs and preferences.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={6}>
                <div className={componentStyle.commitment_flex}>
                  <div className={componentStyle.commitment_flex_icon}>
                    <img src="/dynamic/ethernet_16333083.svg" alt="" />
                  </div>

                  <div className={componentStyle.commitment_flex_content}>
                    <h5>Extensive Network</h5>
                    <p>
                      Our vast network of professionals and industry connections
                      allows us to access a wide pool of talent, giving you
                      access to the best candidates in the market.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={6}>
                <div className={componentStyle.commitment_flex}>
                  <div className={componentStyle.commitment_flex_icon}>
                    <img src="/dynamic/task-list_16330145.svg" alt="" />
                  </div>

                  <div className={componentStyle.commitment_flex_content}>
                    <h5>Efficient Process</h5>
                    <p>
                      We streamline the recruitment process using the latest
                      tools and technologies, ensuring a fast, efficient, and
                      hassle-free experience for both clients and candidates.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home;
