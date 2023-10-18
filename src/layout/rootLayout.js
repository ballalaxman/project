import React from "react";
import Sidebar from "../components/sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled.div`
  flex-grow: 1;
  min-height: 100%;
  margin-left: 20vw;
  padding-top: 48px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px 0px 0px 0px;
    margin-left: 0px;
  }
  /* @media (max-width: 900px) {
    width: 90%;
    margin-left: 10vw;
  } */
`;

const RootLayout = () => {
  return (
    <RootStyle>
      <Sidebar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default RootLayout;
