import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';

const navList = [
  { id: 1, name: "Notes", icon: <Lightbulb />, route: '/'  },
  { id: 2, name: "Archives", icon: <Archive />, route: '/archive' },
  { id: 3, name: "Trash", icon: <Delete />, route: '/delete' },
];

const NavList = () => {
  return (
    <List>
      {
      navList.map(list => (
        <ListItem button key={list.id}>
          <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
              <ListItemIcon style={{ alignItems: 'center'}}>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
