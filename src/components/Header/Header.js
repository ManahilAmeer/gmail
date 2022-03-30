import React from "react";
import "components/Header/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail"
        ></img>
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text"></input>
        <ArrowDropDownIcon className="inputCaret" />
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
