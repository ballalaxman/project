import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import earnings from "../../Assets/earnings.svg";
import Orders from "../../Assets/orders.svg";
import balance from "../../Assets/balance.svg";
import sales from "../../Assets/totalsales.svg";

const Container = styled.div``;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    margin-top: 1rem;
    align-items: center;
    padding: 0.5rem;
  }
`;

const Header = styled.p`
  font: 500 2rem sans-serif;
  @media (max-width: 600px) {
    font: 600 1.5rem sans-serif;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2.4rem auto;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 12px;
  }
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatBox = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(45, 45, 105, 0.17);
  @media (max-width: 600px) {
    display: none;
  }
`;

const IconBox = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: lightgreen;
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    width: 60px;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font: 400 1.065rem sans-serif;
  color: #dcdcdc;
  @media (max-width: 600px) {
    font: 500 1.065rem sans-serif;
    color: #000;
  }
`;

const Money = styled.p`
  font: 600 1.3rem sans-serif;
`;

const Stat = styled.p`
  display: flex;
  align-items: center;
  font: 400 1.065rem sans-serif;
  @media (max-width: 600px) {
    font: 400 0.75rem sans-serif;
  }
`;

const MobileStatBox = styled.div`
  display: none;
  @media (max-width: 600px) {
    background-color: #fff;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileNavbar = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    background-color: #2d2d69;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = styled.p`
  font: 600 2rem sans-serif;
  color: #fff;
`;

const Dashboard = () => {
  return (
    <Container>
      <MobileNavbar>
        <Heading>Dashboard</Heading>
        <MenuIcon sx={{ fontSize: "2rem", color: "#fff" }} />
      </MobileNavbar>
      <Navbar>
        <Header>Hello Laxman</Header>
        <TextField
          size="small"
          placeholder="search"
          sx={{
            width: { xs: "10rem", sm: "20rem" },
            height: "3rem",
            borderRadius: "12px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Navbar>
      <StatsContainer>
        <StatBox>
          <IconBox>
            <Icon src={earnings} />
          </IconBox>
          <TextBox>
            <Title>Earnings</Title>
            <Money>$198K</Money>
            <Stat>
              <ArrowUpwardIcon />
              37.8% this month
            </Stat>
          </TextBox>
        </StatBox>
        <StatBox>
          <IconBox
            style={{
              backgroundColor: "#e7dbff",
            }}
          >
            <Icon src={Orders} />
          </IconBox>
          <TextBox>
            <Title>Earnings</Title>
            <Money>$198K</Money>
            <Stat>
              <ArrowDownwardIcon />
              37.8% this month
            </Stat>
          </TextBox>
        </StatBox>
        <StatBox>
          <IconBox
            style={{
              backgroundColor: "#ccf2ff",
            }}
          >
            <Icon src={balance} />
          </IconBox>
          <TextBox>
            <Title>Earnings</Title>
            <Money>$198K</Money>
            <Stat>
              <ArrowDownwardIcon sx={{ color: "lightred" }} />
              37.8% this month
            </Stat>
          </TextBox>
        </StatBox>
        <StatBox>
          <IconBox
            style={{
              backgroundColor: "#feb0d8",
            }}
          >
            <Icon src={sales} />
          </IconBox>
          <TextBox>
            <Title>Earnings</Title>
            <Money>$198K</Money>
            <Stat>
              <ArrowUpwardIcon />
              37.8% this month
            </Stat>
          </TextBox>
        </StatBox>
        <MobileStatBox>
          <Title>Earnings</Title>
          <Wrapper>
            <IconBox
              style={{
                backgroundColor: "lightgreen",
              }}
            >
              <Icon src={earnings} />
            </IconBox>
            <Money>$198K</Money>
          </Wrapper>
          <Stat>
            <ArrowUpwardIcon sx={{ color: "lightgreen" }} />
            37.8% this month
          </Stat>
        </MobileStatBox>
        <MobileStatBox>
          <Title>Orders</Title>
          <Wrapper>
            <IconBox
              style={{
                backgroundColor: "#e7dbff",
              }}
            >
              <Icon src={Orders} />
            </IconBox>
            <Money>$2.4K</Money>
          </Wrapper>
          <Stat>
            <ArrowDownwardIcon sx={{ color: "lightred" }} />
            2% this month
          </Stat>
        </MobileStatBox>
        <MobileStatBox>
          <Title>Balance</Title>
          <Wrapper>
            <IconBox
              style={{
                backgroundColor: "#ccf2ff",
              }}
            >
              <Icon src={balance} />
            </IconBox>
            <Money>$2.4K</Money>
          </Wrapper>
          <Stat>
            <ArrowDownwardIcon sx={{ color: "lightred" }} />
            37.8% this month
          </Stat>
        </MobileStatBox>
        <MobileStatBox>
          <Title>Total sales</Title>
          <Wrapper>
            <IconBox
              style={{
                backgroundColor: "#feb0d8",
              }}
            >
              <Icon src={sales} />
            </IconBox>
            <Money>$89K</Money>
          </Wrapper>
          <Stat>
            <ArrowUpwardIcon sx={{ color: "lightgreen" }} />
            11% this month
          </Stat>
        </MobileStatBox>
      </StatsContainer>
    </Container>
  );
};

export default Dashboard;
