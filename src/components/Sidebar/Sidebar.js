import React from 'react'
import "components/Sidebar/Sidebar.css"
import SidebarOption from 'components/SidebarOption/SidebarOption';
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      ></SidebarOption>
      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        number={54}
      ></SidebarOption>
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={54}
      ></SidebarOption>
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={54}
      ></SidebarOption>
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54}></SidebarOption>
      <SidebarOption Icon={NoteIcon} title="Draft" number={54}></SidebarOption>
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={54}
      ></SidebarOption>
    </div>
  );
}

export default Sidebar