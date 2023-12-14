import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import { Badge, Grid, Avatar, Typography } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import userServices from "../../services/userServices";

const Footer = styled.div`
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props) => props.theme.spacing(2.75)}
    ${(props) => props.theme.spacing(4)};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const FooterText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;

const FooterSubText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;

const FooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)};
  span {
    background-color: ${(props) =>
      props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

const SidebarFooter = ({ ...rest }) => {
  const { user } = useAuth();
  const userData = useSelector((state) => state.user);

  return (
    <Footer {...rest}>
      <Grid container spacing={2}>
        <Grid item>
          <FooterBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            {!!user && <Avatar alt={userData} src={user.avatar} />}
            {/* Demo data */}
            {!user && (
              <Avatar
                alt="Lucy Lavender"
                src="/static/img/avatars/avatar-1.jpg"
              />
            )}
          </FooterBadge>
        </Grid>
        <Grid item>
          {userServices.isLogedIn() && (
            <>
              <FooterText variant="body2">{userData.user.username}</FooterText>
              <FooterSubText variant="caption">
                {userData.user.email}
              </FooterSubText>
            </>
          )}
        </Grid>
      </Grid>
    </Footer>
  );
};

export default SidebarFooter;
