import KeyIcon from "@mui/icons-material/Key";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Product1 from "../Assets/product1.jpg";
import Product2 from "../Assets/product2.jpeg";

export const SIDEBAR_CONFIG = [
  {
    id: 1,
    title: "Dashboard",
    icon: <KeyIcon sx={{ color: "#fff" }} />,
    path: "/",
  },
  {
    id: 2,
    title: "Product",
    icon: <LocalOfferIcon sx={{ color: "#fff" }} />,
    path: "/product",
  },
  {
    id: 3,
    title: "Customers",
    icon: <PermIdentityIcon sx={{ color: "#fff" }} />,
    path: "/customers",
  },
  {
    id: 4,
    title: "Income",
    icon: <AccountBalanceWalletIcon sx={{ color: "#fff" }} />,
    path: "/income",
  },
  {
    id: 5,
    title: "Help",
    icon: <LiveHelpIcon sx={{ color: "#fff" }} />,
    path: "/help",
  },
];

export const PRODUCTS_TABLE_CONFIG = [
  {
    id: 1,
    image: Product1,
    productName: "Abstract 3D",
    caption: "Lorem Ipsum Dolar sit amet, consecuter adpiscieng alit",
    stock: 32,
    price: 45.99,
    sales: 20,
  },
  {
    id: 2,
    image: Product2,
    productName: "Illustrations",
    caption: "Lorem Ipsum Dolar sit amet, consecuter adpiscieng alit",
    stock: 32,
    price: 45.99,
    sales: 20,
  },
];
