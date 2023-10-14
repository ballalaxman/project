import KeyIcon from "@mui/icons-material/Key";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const SIDEBAR_CONFIG = [
  {
    id: 1,
    title: "Dashboard",
    icon: <KeyIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 2,
    title: "Product",
    icon: <LocalOfferIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 3,
    title: "Customers",
    icon: <PermIdentityIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 4,
    title: "Income",
    icon: <AccountBalanceWalletIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 5,
    title: "Help",
    icon: <LiveHelpIcon sx={{ color: "#fff" }} />,
  },
];
