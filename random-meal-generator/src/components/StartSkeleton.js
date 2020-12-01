import { Container, Hidden } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

import styled from "styled-components";

const StartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function StartSkeleton() {
  return (
    <StartStyled>
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
          <Skeleton
            variant="rect"
            width="100%"
            height="25rem"
            style={{ borderRadius: "2rem" }}
          />
          <Skeleton variant="text" width="25rem" height="5rem" />
          <Skeleton variant="text" width="35rem" height="3rem" />
          <Skeleton variant="text" width="20rem" height="5rem" />
        </Hidden>
        <Hidden smUp>
          <Skeleton
            variant="rect"
            width="100%"
            height="10rem"
            style={{ borderRadius: "2rem" }}
          />
          <Skeleton variant="text" width="15rem" height="5rem" />
          <Skeleton variant="text" width="25rem" height="3rem" />
          <Skeleton variant="text" width="10rem" height="5rem" />
        </Hidden>
      </Container>
    </StartStyled>
  );
}

export default StartSkeleton;
