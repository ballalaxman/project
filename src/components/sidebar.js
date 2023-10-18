import React from "react";
import styled from "styled-components";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { SIDEBAR_CONFIG } from "../utils/constants";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #040440;
  position: fixed;
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 900px) {
    width: 10%;
  }
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
  font-family: sans-serif;
  @media (max-width: 900px) {
    display: none;
  }
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
  background-color: #2d2d69;
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: sans-serif;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path, id) => {
    navigate(path);
    console.log(id);
  };
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
          <SidebarBox
            onClick={() => handleNavigate(item.path, item.id)}
            key={item.id}
          >
            <Title>
              {item.icon}
              <Text>{item.title}</Text>
            </Title>
            <KeyboardArrowRightIcon
              sx={{
                color: "#fff",
                display: { xs: "none", md: "none", lg: "block" },
              }}
            />
          </SidebarBox>
        ))}
      </SidebarTitleContainer>
    </Container>
  );
};

export default Sidebar;
