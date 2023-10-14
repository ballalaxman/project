import React from "react";
import styled from "styled-components";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { SIDEBAR_CONFIG } from "../utils/constants";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  width: 16vw;
  height: 100vh;
  background-color: #040440;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 1.4rem;
`;

const Heading = styled.p`
  color: #fff;
  font-size: 1.5rem;
`;

const SidebarTitleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin: auto;
  padding: 4rem 0;
`;

const SidebarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const Sidebar = () => {
  return (
    <Container>
      <TitleContainer>
        <GridViewOutlinedIcon
          sx={{
            fontSize: "1.5rem",
            color: "#fff",
          }}
        />
        <Heading>Dashboard</Heading>
      </TitleContainer>
      <SidebarTitleContainer>
        {SIDEBAR_CONFIG.map((item) => (
          <SidebarBox>
            <Title>
              {item.icon}
              <Text>{item.title}</Text>
            </Title>
            <KeyboardArrowRightIcon sx={{ color: "#fff" }} />
          </SidebarBox>
        ))}
      </SidebarTitleContainer>
    </Container>
  );
};

export default Sidebar;
