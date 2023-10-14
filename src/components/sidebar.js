import React from "react";
import styled from "styled-components";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

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
    </Container>
  );
};

export default Sidebar;
