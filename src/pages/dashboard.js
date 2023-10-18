import styled from "styled-components";
import DashboardComponent from "../components/DashboardComponent";
import Graphs from "../components/DashboardComponent/Graphs";
import Products from "../components/DashboardComponent/Products";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Dashboard = () => {
  return (
    <PageContainer>
      <DashboardComponent />
      <Graphs />
      <Products />
    </PageContainer>
  );
};

export default Dashboard;
