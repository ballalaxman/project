import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DemoColumn from "./barGraph";
import DemoPie from "./DougnutGraph";

const GraphsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0.75rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const BarGraph = styled.div`
  width: 65%;
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem;
  @media (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;
    padding: 0.75rem;
  }
  @media (max-width: 900px) {
    width: 95%;
    padding: 0.75rem;
  }
`;

const GraphHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const GraphHeaderText = styled.p`
  font: 600 1.5rem sans-serif;
`;

const Caption = styled.p`
  font: 400 1rem sans-serif;
  color: #dcdcdc;
`;

const PieChart = styled.div`
  width: 28%;
  background-color: #fff;
  border-radius: 12px;
  padding: 1.2rem;
  @media (max-width: 600px) {
    width: 95%;
    padding: 0.75rem;
    margin-top: 2rem;
  }
  @media (max-width: 900px) {
    margin-top: 2rem;
    width: 95%;
    padding: 0.75rem;
  }
`;

const Graphs = () => {
  return (
    <GraphsContainer>
      <BarGraph>
        <GraphHeader>
          <Box>
            <GraphHeaderText>Overview</GraphHeaderText>
            <Caption>Monthly Earnings</Caption>
          </Box>
          <Select
            id="demo-select-small"
            label="querterly"
            sx={{ width: { xs: "150px", sm: "250px" } }}
            placeholder="select"
          >
            <MenuItem>Querterly</MenuItem>
            <MenuItem>HalfYearly</MenuItem>
          </Select>
        </GraphHeader>
        <DemoColumn />
      </BarGraph>
      <PieChart>
        <GraphHeader>
          <Box>
            <GraphHeaderText>Customers</GraphHeaderText>
            <Caption>Customers that buy products</Caption>
          </Box>
        </GraphHeader>
        <DemoPie />
      </PieChart>
    </GraphsContainer>
  );
};

export default Graphs;
