import { Container, Grid, Hidden } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

function MealSkeleton() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="md"
      >
        <Hidden xsDown>
          <Skeleton variant="text" width="25rem" height="5rem" />
          <Skeleton variant="text" width="35rem" height="3rem" />
          <Skeleton variant="text" width="20rem" height="5rem" />
        </Hidden>
        <Hidden smUp>
          <Skeleton variant="text" width="15rem" height="5rem" />
          <Skeleton variant="text" width="25rem" height="3rem" />
          <Skeleton variant="text" width="10rem" height="5rem" />
        </Hidden>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Skeleton
              variant="rect"
              width="100%"
              height="25rem"
              style={{ borderRadius: "2rem" }}
            />
          </Grid>
          <Grid xs={12} item sm={6}>
            <Skeleton
              style={{ margin: "auto" }}
              variant="text"
              width="70%"
              height="5rem"
            />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
            <Skeleton variant="text" width="100%" height="3rem" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MealSkeleton;
