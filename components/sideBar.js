import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import CastleIcon from '@mui/icons-material/Castle';

const sideBar = () => {
  return (
    <div>
      <Toolbar sx={{justifyContent: "center"}}>
        <CastleIcon sx={{fontSize:"40px", margin: "30px"}} />
      </Toolbar>
      <List>
        {['Dashboard', 'Apps', 'Charts', 'Bootstrap'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{display: "flex", flexDirection: "column", marginBottom:"10px"}}>
              <ListItemIcon sx={{justifyContent: "center", margin: "0 auto", background: "#e0e0e8", padding: "10px", borderRadius: "4px", minWidth:"0"}} >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}  sx={{textAlign: "center"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  )
}

export default sideBar
