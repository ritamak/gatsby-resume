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
  font-family: "Prompt";
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
`;

const StyledLinkButton = styled(Link)`
  font-family: "Prompt" !important;
  text-decoration: none;
  color: black !important;
`;

const StyledBox = styled(Box)`
  font-family: "Prompt" !important;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: 30px;
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              RITABOOK
            </Typography>
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
                  Projects
                </StyledLinkButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLinkButton
                  to="/about"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  About
                </StyledLinkButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            style={{ color: "black" }}
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <StyledLinkButton to="/">RITABOOK</StyledLinkButton>
          </Typography>
          <StyledBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <StyledLinkButton
              to="/projects"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Projects
            </StyledLinkButton>
            <StyledLinkButton
              to="/about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              About
            </StyledLinkButton>
          </StyledBox>
          <Box sx={{ flexGrow: 0 }}>
            <StyledLink to="/contact">Contact</StyledLink>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Navbar;
