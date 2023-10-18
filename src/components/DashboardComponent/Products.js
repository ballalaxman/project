import {
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import {
  StyledBodyTableCell,
  StyledHeadTableCell,
  StyledTable,
  StyledTableBody,
  StyledTableBodyRow,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadRow,
} from "../../utils/styledComponents";
import { PRODUCTS_TABLE_CONFIG } from "../../utils/constants";

const Container = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  padding: 1rem;
  @media (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.p`
  font: 600 1.5rem sans-serif;
`;

const headTableCellStyle = {
  p: "10px",
  border: "none",
  fontWeight: "400",
  fontFamily: "sans-serif",
  fontSize: "1rem",
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Caption = styled.p`
  font: 500 0.95rem sans-serif;
  color: gray;
`;

const Image = styled.img`
  width: 5rem;
  height: 2.5rem;
  border-radius: 6px;
  object-fit: cover;
  @media (max-width: 600px) {
    display: none;
  }
`;

const TextWrapper = styled.div``;

const ProductName = styled.p`
  font: 600 1.25rem sans-serif;
`;

const bodyTableCellStyle = {
  fontSize: "1rem",
  fontFamily: "sans-serif",
};

const Products = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Product sell</HeaderText>
        <Stack spacing={2} direction="row">
          <TextField
            size="small"
            sx={{ width: { xs: "150px", sm: "250px" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search"
          />
          <Select
            size="small"
            value={"Last 30 Days"}
            placeholder="Last 30 Days"
          >
            <MenuItem>Last 30 days</MenuItem>
            <MenuItem>Last 15 days</MenuItem>
          </Select>
        </Stack>
      </Header>
      <StyledTableContainer sx={{ marginTop: "1rem" }}>
        <StyledTable>
          <StyledTableHead>
            <StyledTableHeadRow>
              <StyledHeadTableCell
                sx={{ ...headTableCellStyle, width: "70%" }}
                align="left"
              >
                Product Name
              </StyledHeadTableCell>
              <StyledHeadTableCell sx={{ ...headTableCellStyle }} align="left">
                Stock
              </StyledHeadTableCell>
              <StyledHeadTableCell sx={{ ...headTableCellStyle }} align="left">
                Price
              </StyledHeadTableCell>
              <StyledHeadTableCell sx={{ ...headTableCellStyle }} align="left">
                Total Sales
              </StyledHeadTableCell>
            </StyledTableHeadRow>
          </StyledTableHead>
          <StyledTableBody>
            {PRODUCTS_TABLE_CONFIG.map((item) => (
              <StyledTableBodyRow key={item.id}>
                <StyledBodyTableCell>
                  <Wrapper>
                    <Image src={item.image} alt="product" />
                    <TextWrapper>
                      <ProductName>{item.productName}</ProductName>
                      <Caption>{item.caption}</Caption>
                    </TextWrapper>
                  </Wrapper>
                </StyledBodyTableCell>
                <StyledBodyTableCell sx={{ ...bodyTableCellStyle }}>
                  {item.stock} in Stock
                </StyledBodyTableCell>
                <StyledBodyTableCell sx={{ ...bodyTableCellStyle }}>
                  <b>${item.price}</b>
                </StyledBodyTableCell>
                <StyledBodyTableCell sx={{ ...bodyTableCellStyle }}>
                  {item.sales}
                </StyledBodyTableCell>
              </StyledTableBodyRow>
            ))}
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default Products;
