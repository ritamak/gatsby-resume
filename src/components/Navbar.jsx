import * as React from "react";
import styled from "styled-components";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "gatsby";

const StyledAppBar = styled(AppBar)`
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: black !important;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: "Mochiy Pop P One";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: #7664a8;
  padding: 2px 10px 2px 10px;
  border-radius: 10px;
  font-family: "Mochiy Pop P One";
`;

const StyledLinkButton = styled(Link)`
  font-family: "Mochiy Pop P One" !important;
  text-decoration: none;
  color: black !important;
`;

const NavLinkButton = styled(Link)`
  font-family: "Mochiy Pop P One", cursive !important;
  text-decoration: none;
  color: black !important;
  font-size: 2rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled(Box)`
  font-family: "Prompt" !important;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: 30px;
`;

const NavTitle = styled(Typography)`
  font-size: 2rem !important;
  font-family: "Mochiy Pop P One", cursive !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <StyledLinkButton to="/">
            <NavTitle
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Ritabook
            </NavTitle>
          </StyledLinkButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLinkButton
                  to="/projects"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  projects
                </StyledLinkButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLinkButton
                  to="/about"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  about
                </StyledLinkButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLinkButton
                  to="/contact"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  contact
                </StyledLinkButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            style={{ color: "black" }}
            component="div"
            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
          >
            <NavLinkButton to="/">Ritabook</NavLinkButton>
          </Typography>
          <StyledBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <StyledLinkButton
              to="/projects"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              projects
            </StyledLinkButton>
            <StyledLinkButton
              to="/about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              about
            </StyledLinkButton>
          </StyledBox>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <StyledLink to="/contact">contact</StyledLink>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Navbar;
