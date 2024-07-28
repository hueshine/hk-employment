import { Container, Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={7}>
              <h1>
                You can make <br /> problem solving <br /> better
              </h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* <h1>You can make</h1>
      <h2>This is header</h2>
      <h3>This is header</h3>
      <h4>This is header</h4>
      <h5>This is header</h5>
      <h6>This is header</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur
        officiis vero at itaque eligendi quod asperiores enim illum, impedit
        ipsum saepe excepturi natus cum perferendis pariatur voluptate?
      </p> */}
    </div>
  );
};

export default Home;
