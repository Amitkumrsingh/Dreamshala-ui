import React from "react";
import styled from "@emotion/styled";
import { Power } from "react-feather";
import { useRouter } from "next/router";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { signOutUser } from "../../redux/slices/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../config";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const dispatch = useDispatch();
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const router = useRouter();
  const { signOut } = useAuth();
  const userData = useSelector((state) => state.user);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    // const response = await fetch(API_BASE_URL + "/users/signin/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: values.email,
    //     password: values.password,
    //   }),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Token " + userData.user.token,
    //   },
    // });
    // const jsonData = await response.json();
    // console.log(jsonData);
    // router.push("/auth/sign-in");

    dispatch(signOutUser());
    router.push("/");
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {/* <MenuItem onClick={closeMenu}>Profile</MenuItem> */}
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
