import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1.5}
    sx={{ position: "sticky", background: '#000', top: 8, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={55} />
      <Typography variant="h6" sx={{ ml: 1 }}>
        <span style={{ color: 'red' }}>You</span><span style={{ color: 'white' }}>Thoob</span>
      </Typography>
    </Link>
   { /* <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mx: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
       
      </Box> 
      
    </Box> */ }
    <SearchBar />
  </Stack>
);

export default Navbar;
